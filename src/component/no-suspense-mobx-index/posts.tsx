import useStores from "../../hook/useStores";

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

export default Posts;
