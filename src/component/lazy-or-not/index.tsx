import React from "react";

import NoLazy1 from "../../asset/img/no-lazy-1.png";
import NoLazy2 from "../../asset/img/no-lazy-2.png";
import NoLazy3 from "../../asset/img/no-lazy-3.png";
import Lazy1 from "../../asset/img/lazy-1.png";
import Lazy2 from "../../asset/img/lazy-2.png";
import Lazy3 from "../../asset/img/lazy-3.png";
import { Link } from "react-router-dom";

const LazyOrNot = () => {
  return (
    <main>
      <h2>Compare Using Lazy or Not</h2>
      <Link to="/">HOME</Link>
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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <p>Lazy 3</p>
          <img src={Lazy3} alt="lazy-3" />
        </div>
        <div>
          <p>No Lazy 3</p>
          <img src={NoLazy3} alt="no-lazy-3" />
        </div>
      </div>
    </main>
  );
};

export default LazyOrNot;
