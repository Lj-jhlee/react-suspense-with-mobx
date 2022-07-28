import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <hr />
      <Link to="/no">No Suspense</Link>
      <br />
      <Link to="/only">Only</Link>
      <br />
      <Link to="/mobx">Mobx</Link>

      <p>
        Reference:{" "}
        <a
          target="_blank"
          href="https://www.daleseo.com/react-suspense/"
          rel="noreferrer"
        >
          React-suspense
        </a>{" "}
      </p>
    </div>
  );
};

export default Home;
