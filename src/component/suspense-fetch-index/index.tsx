import React, { Suspense } from "react";

import fetchData from "../../fetch/reqeustFetch";
import User from "./user";
import { Link } from "react-router-dom";

const SuspenseOnly = () => {
  const resource = fetchData(1);

  const user = resource.user.read();
  const posts = resource.posts.read();

  return (
    <div>
      <h1>Suspense with Fetch on Index</h1>
      <Link to="/">HOME</Link>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <User user={user} posts={posts} />
      </Suspense>
    </div>
  );
};

export default SuspenseOnly;
