import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import UseSuspense from "./use-suspense";
import NoSuspense from "./no-suspense";
import UseSuspenseWithMobx from "./use-suspense-mobx";

const RaceCondition = () => {
  return (
    <div>
      <h2>Compare Race condition</h2>
      <p>
        Reference:{" "}
        <a
          href="https://tecoble.techcourse.co.kr/post/2021-07-11-suspense/#:~:text=%EC%98%88%EB%A5%BC%20%EB%93%A4%EC%96%B4%20%EB%8B%A4%EC%9D%8C%EA%B3%BC%20%EA%B0%99%EC%9D%80%20%EC%83%81%ED%99%A9%EC%9D%84%20%EA%B0%80%EC%A0%95%ED%95%B4%EB%B3%B4%EC%9E%90."
          target="_blank"
          rel="noreferrer"
        >
          사용자 경험 개선 1편 - react suspense
        </a>
      </p>
      <Link to="/">HOME</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "50px",
        }}
      >
        <NoSuspense />

        <Suspense fallback={<p>pending data fetching....</p>}>
          <UseSuspense />
        </Suspense>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "500px" }}></div>
        <Suspense fallback={<p>pending data fetching....</p>}>
          <UseSuspenseWithMobx />
        </Suspense>
      </div>
    </div>
  );
};

export default RaceCondition;
