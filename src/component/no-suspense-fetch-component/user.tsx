import { useState, useEffect } from "react";
import Posts from "./posts";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>pending data fetching....</p>;

  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Posts />
    </div>
  );
}

export default User;
