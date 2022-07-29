import React, { Suspense } from "react";
import Post from "./post";

function User({ resource }: any) {
  const user = resource.user.read();

  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Suspense fallback={<p>글목록 로딩중...</p>}>
        <Post resource={resource} />
      </Suspense>
    </div>
  );
}

export default User;
