import User from "./user";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useStores from "../../hook/useStores";

function NoSuspense() {
  const { userStore, postStore } = useStores();

  useEffect(() => {
    userStore.getUsers(1);
    postStore.getPosts(1);
    return () => {
      userStore.clear();
      postStore.clear();
    };
  }, [userStore, postStore]);

  return (
    <main>
      <h2>No Suspense with mobx on Index</h2>
      <Link to="/">HOME</Link>
      <User />
    </main>
  );
}

export default NoSuspense;
