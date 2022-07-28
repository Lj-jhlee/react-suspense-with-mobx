import User from "./user";
import { Link } from "react-router-dom";

function NoSuspense() {
  return (
    <main>
      <h2>No Suspense and No Mobx</h2>
      <Link to="/">HOME</Link>
      <User userId={1} />
    </main>
  );
}

export default NoSuspense;
