import React, { Suspense } from "react";
import Post from "./post";

function User({ user, posts }: any) {
  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Suspense fallback={<p>글목록 로딩중...</p>}>
        <Post posts={posts} />
      </Suspense>
    </div>
  );
}

export default User;
