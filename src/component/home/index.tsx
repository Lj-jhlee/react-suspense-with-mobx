import React from "react";
import { Link } from "react-router-dom";

import NoSuspenseFetchIndex from "../../asset/img/no-suspense-fetch-index.png";
import NoSuspenseFetchComponent from "../../asset/img/no-suspense-fetch-component.png";
import NoSuspenseMobxIndex from "../../asset/img/no-suspense-mobx-index.png";
import NoSuspenseMobxComponent from "../../asset/img/no-suspense-mobx-component.png";
import SuspenseFetchIndex from "../../asset/img/suspense-fetch-index.png";
import SuspenseFetchComponent from "../../asset/img/suspense-fetch-component.png";
import SuspenseMobxIndex from "../../asset/img/suspense-mobx-index.png";
import SuspenseMobxComponent from "../../asset/img/suspense-mobx-component.png";

const Home = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <h2>
        Compare suspense and mobx when using or not. And api calling location
      </h2>
      <p>How To Use : Set fast or slow 3G on Network</p>
      <p>
        Additinal Compare - Lazy or Not :{" "}
        <Link to="/lazy-or-not">See Lazy or Not</Link>
      </p>
      <p>
        Reference:
        <a
          target="_blank"
          href="https://www.daleseo.com/react-suspense/"
          rel="noreferrer"
        >
          React-suspense
        </a>{" "}
      </p>
      <hr />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/no-suspense-fetch-index">
            No Suspense With Fetch and Index
          </Link>
          <ul>
            <li>No suspense</li>
            <li>No Mobx</li>
            <li>Call apis on index.tsx</li>
          </ul>
        </div>
        <img src={NoSuspenseFetchIndex} alt="no-suspense-fetch-index" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/no-suspense-fetch-component">
            No Suspense With Fetch and Component
          </Link>
          <ul>
            <li>No suspense</li>
            <li>No Mobx</li>
            <li>Call apis on each components</li>
          </ul>
        </div>
        <img src={NoSuspenseFetchComponent} alt="no-suspense-fetch-component" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/no-suspense-mobx-index">
            No Suspense With Mobx and Index
          </Link>
          <ul>
            <li>No suspense</li>
            <li>Use Mobx</li>
            <li>Call apis on index.tsx</li>
            <li style={{ color: "red" }}>Did not render data</li>
          </ul>
        </div>
        <img src={NoSuspenseMobxIndex} alt="no-suspense-mobx-index" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/no-suspense-mobx-component">
            No Suspense With Mobx and Component
          </Link>
          <ul>
            <li>No suspense</li>
            <li>Use Mobx</li>
            <li>Call apis on each components</li>
            <li style={{ color: "red" }}>Did not render data</li>
          </ul>
        </div>
        <img src={NoSuspenseMobxComponent} alt="no-suspense-mobx-component" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/suspense-fetch-index">Suspense With Fetch and Index</Link>
          <ul>
            <li>Use suspense</li>
            <li>No Mobx</li>
            <li>Call apis on index.tsx</li>
            <li style={{ color: "red" }}>Infinitly, Call apis</li>
          </ul>
        </div>
        <img src={SuspenseFetchIndex} alt="suspense-fetch-index" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/suspense-fetch-component">
            Suspense With Fetch and Component
          </Link>
          <ul>
            <li>Use suspense</li>
            <li>No Mobx</li>
            <li>Call apis on each components</li>
          </ul>
        </div>
        <img src={SuspenseFetchComponent} alt="suspense-fetch-component" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/suspense-mobx-index">Suspense With Mobx and Index</Link>
          <ul>
            <li>Use suspense</li>
            <li>Use Mobx</li>
            <li>Call apis on index.tsx</li>
          </ul>
        </div>
        <img src={SuspenseMobxIndex} alt="suspense-mobx-index" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Link to="/suspense-mobx-component">
            Suspense With Mobx and Component
          </Link>
          <ul>
            <li>Use suspense</li>
            <li>Use Mobx</li>
            <li>Call apis on each components</li>
            <li style={{ color: "red" }}>
              Unnecessary requests after the api request is finished
            </li>
          </ul>
        </div>
        <img src={SuspenseMobxComponent} alt="suspense-mobx-component" />
      </div>
    </div>
  );
};

export default Home;
