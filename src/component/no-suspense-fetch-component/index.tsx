import User from "./user";
import { Link } from "react-router-dom";

function NoSuspense() {
  return (
    <main>
      <h2>No Suspense with fetch on Components</h2>
      <Link to="/">HOME</Link>
      <User />
    </main>
  );
}

export default NoSuspense;
