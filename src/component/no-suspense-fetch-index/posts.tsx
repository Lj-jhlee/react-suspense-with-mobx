function Posts({ loadingPosts, posts }: any) {
  if (loadingPosts) return <p>pending data fetching....</p>;

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
