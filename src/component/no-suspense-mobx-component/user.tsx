import { useEffect } from "react";
import useStores from "../../hook/useStores";
import Posts from "./posts";

function User() {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.getUsers(1);
  }, [userStore]);

  if (userStore.state === "pending") return <p>pending data fetching....</p>;

  return (
    <div>
      <p>
        Wrote by. {userStore.user.name}({userStore.user.email})
      </p>
      <Posts />
    </div>
  );
}

export default User;
