import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../hook/useStores";

function Posts() {
  const { postStore } = useStores();

  useEffect(() => {
    postStore.getPosts(1);
  }, [postStore]);

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
