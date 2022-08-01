import React from "react";

import NoLazy from "../../asset/img/no-lazy.png";
import NoLazy1 from "../../asset/img/no-lazy-1.png";
import NoLazy2 from "../../asset/img/no-lazy-2.png";

import Lazy from "../../asset/img/lazy.png";
import Lazy1 from "../../asset/img/lazy-1.png";
import Lazy2 from "../../asset/img/lazy-2.png";
import { Link } from "react-router-dom";

const LazyOrNot = () => {
  return (
    <main>
      <h2>Compare Using Lazy or Not</h2>
      <Link to="/">HOME</Link>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <p>Lazy LightHouse</p>
          <img src={Lazy} alt="lazy lighthouse" />
        </div>
        <div>
          <p>No Lazy LightHouse</p>
          <img src={NoLazy} alt="no-lazy lighthouse" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <p>Lazy 1</p>
          <img src={Lazy1} alt="lazy-1" />
        </div>
        <div>
          <p>No Lazy 1</p>
          <img src={NoLazy1} alt="no-lazy-1" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <p>Lazy 2</p>
          <img src={Lazy2} alt="lazy-2" />
        </div>
        <div>
          <p>No Lazy 2</p>
          <img src={NoLazy2} alt="no-lazy-2" />
        </div>
      </div>
    </main>
  );
};

export default LazyOrNot;
