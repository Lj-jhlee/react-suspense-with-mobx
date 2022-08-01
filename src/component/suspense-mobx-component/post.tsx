import React from "react";
import { observer } from "mobx-react-lite";

const Posts = ({ postsResource }: any) => {
  const posts = postsResource();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
};

export default observer(Posts);
