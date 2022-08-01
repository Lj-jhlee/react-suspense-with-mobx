import React, { useState } from "react";

import { requestData } from "../../fetch/raceRequestFetch";

const NoSuspense = () => {
  const [fetchData, setFetchData] = useState<string>("");

  const handleClick = (id: number) => async () => {
    const data = await requestData(id);
    console.log(data);
    setFetchData((data as any).data);
  };

  return (
    <div>
      <h2>No Suspense</h2>
      <p>
        Sometimes you get data you didn't click last when you click buttons
        quickly
      </p>
      <p>
        And you can see all logs you clicked when you click buttons lots of
        times
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleClick(1)}>first</button>
        <button onClick={handleClick(2)}>second</button>
        <button onClick={handleClick(3)}>third</button>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>{fetchData}</p>
    </div>
  );
};

export default NoSuspense;
