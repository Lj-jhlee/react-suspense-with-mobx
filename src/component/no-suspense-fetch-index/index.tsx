import User from "./user";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NoSuspense() {
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [user, setUser] = useState<any>({});
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        setLoadingUser(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${1}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setLoadingPosts(false);
      });
  }, []);

  return (
    <main>
      <h2>No Suspense with fetch on Index</h2>
      <Link to="/">HOME</Link>
      <User
        loadingUser={loadingUser}
        loadingPosts={loadingPosts}
        user={user}
        posts={posts}
      />
    </main>
  );
}

export default NoSuspense;
