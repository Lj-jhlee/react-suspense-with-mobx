import { useEffect, useState } from "react";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${1}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>pending data fetching....</p>;

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
