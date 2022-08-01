import React, { useState, Suspense } from "react";
import { observer } from "mobx-react-lite";

import useStores from "../../hook/useStores";

const ShowData = observer(({ resource }: any) => {
  const data = resource();
  console.log(data);

  return (
    <p style={{ display: "flex", justifyContent: "center" }}>{data?.data}</p>
  );
});

const UseSuspenseWithMobx = () => {
  const { raceStore } = useStores();

  const [id, setId] = useState<number>(0);

  const handleClick = (getId: number) => () => {
    setId(getId);
  };

  const handleGetData = () => {
    console.log(raceStore.data);
  };

  return (
    <div>
      <h2>Use Suspense With Mobx</h2>
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
        <ShowData resource={raceStore.getData(id)} />
      </Suspense>
      <br />
      <br />
      <button onClick={handleGetData}>get Current Data</button>
      <p>{`currentData : ${raceStore.data?.data}`}</p>
      <p style={{ color: "red" }}>
        Issue occured when I try to use observer on this component.
        <br />
        So this currentData could not render updated data in store using mobx.
        <br />
        But you can check log on console.
      </p>
    </div>
  );
};

export default UseSuspenseWithMobx;
