import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../hook/useStores";
import Post from "./post";

const User = ({ userResource }: any) => {
  const user = userResource();
  const { suspensePostsStore } = useStores();

  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <Post postsResource={suspensePostsStore.getPosts(1)} />
      </Suspense>
    </div>
  );
};

export default observer(User);
