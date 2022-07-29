import React, { Suspense, useEffect } from "react";
import useStores from "../../hook/useStores";
import User from "./user";
import { Link } from "react-router-dom";

const SuspenseWithMobx = () => {
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
    <div>
      <h2>Suspense with Mobx on Index</h2>
      <Link to="/">HOME</Link>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <User />
      </Suspense>
    </div>
  );
};

export default SuspenseWithMobx;
