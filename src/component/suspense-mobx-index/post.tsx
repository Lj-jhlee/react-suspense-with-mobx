import React from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../hook/useStores";

const Posts = () => {
  const { suspensePostsStore } = useStores();

  return (
    <ul>
      {suspensePostsStore.posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
};

export default observer(Posts);
