import useStores from "../../hook/useStores";
import { observer } from "mobx-react-lite";

function Posts() {
  const { postStore } = useStores();

  if (postStore.state === "pending") return <p>pending data fetching....</p>;

  return (
    <ul>
      {postStore.posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default observer(Posts);
