import React, { useState, Suspense } from "react";

import { fetchNumberData } from "../../fetch/raceRequestFetch";

const ShowData = ({ resource }: any) => {
  const fetchData = resource.data.read();
  console.log(fetchData);

  return (
    <p style={{ display: "flex", justifyContent: "center" }}>
      {fetchData?.data}
    </p>
  );
};

const UseSuspense = () => {
  const [id, setId] = useState<number>(0);

  const handleClick = (getId: number) => () => {
    setId(getId);
  };

  return (
    <div>
      <h2>Use Suspense</h2>
      <p>you get data you clicked last when you click buttons quickly</p>
      <p>
        And you can see the only one log you clicked last when you click buttons
        lots of times
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleClick(1)}>first</button>
        <button onClick={handleClick(2)}>second</button>
        <button onClick={handleClick(3)}>third</button>
      </div>
      <Suspense fallback={<p>pending data fetching....</p>}>
        <ShowData resource={fetchNumberData(id)} />
      </Suspense>
    </div>
  );
};

export default UseSuspense;
