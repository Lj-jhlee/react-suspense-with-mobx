import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../hook/useStores";
import Post from "./post";

const User = () => {
  const { userStore } = useStores();

  if (userStore.state === "pending") return <p>pending data fetching....</p>;

  return (
    <div>
      <p>
        Wrote by. {userStore.user.name}({userStore.user.email})
      </p>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <Post />
      </Suspense>
    </div>
  );
};

export default observer(User);
