import React, { Suspense, useEffect } from "react";
import useStores from "../../hook/useStores";
import User from "./user";
import { Link } from "react-router-dom";

const SuspenseWithMobx = () => {
  const { suspenseUserStore, suspensePostsStore } = useStores();

  useEffect(() => {
    return () => {
      suspenseUserStore.clear();
      suspensePostsStore.clear();
    };
  }, [suspenseUserStore, suspensePostsStore]);

  return (
    <div>
      <h2>Suspense with Mobx on Components</h2>
      <Link to="/">HOME</Link>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <User userResource={suspenseUserStore.getUsers(1)} />
      </Suspense>
    </div>
  );
};

export default SuspenseWithMobx;
