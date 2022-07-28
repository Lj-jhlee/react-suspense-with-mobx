import { useState, useEffect } from "react";
import Posts from "./posts";

function User({ userId }: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  }, [userId]);

  if (loading) return <p>pending data fetching....</p>;
  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Posts userId={userId} />
    </div>
  );
}

export default User;
