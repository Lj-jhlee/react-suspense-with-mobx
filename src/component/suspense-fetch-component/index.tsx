import React, { Suspense } from "react";

import fetchData from "../../fetch/reqeustFetch";
import User from "./user";
import { Link } from "react-router-dom";

const SuspenseOnly = () => {
  return (
    <div>
      <h2>Suspense with Fetch on Components</h2>
      <Link to="/">HOME</Link>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <User resource={fetchData(1)} />
      </Suspense>
    </div>
  );
};

export default SuspenseOnly;
