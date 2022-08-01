import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import Post from "./post";
import useStores from "../../hook/useStores";

const User = () => {
  const { suspenseUserStore } = useStores();

  return (
    <div>
      <p>
        Wrote by. {suspenseUserStore.user.name}({suspenseUserStore.user.email})
      </p>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <Post />
      </Suspense>
    </div>
  );
};

export default observer(User);
