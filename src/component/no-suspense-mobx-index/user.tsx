import useStores from "../../hook/useStores";
import { observer } from "mobx-react-lite";

import Posts from "./posts";

function User() {
  const { userStore } = useStores();

  if (userStore.state === "pending") return <p>pending data fetching....</p>;

  return (
    <div>
      <p>
        Wrote by. {userStore.user.name}({userStore.user.email})
      </p>
      <Posts />
    </div>
  );
}

export default observer(User);
