import Posts from "./posts";

function User({ loadingUser, loadingPosts, user, posts }: any) {
  if (loadingUser) return <p>pending data fetching....</p>;

  return (
    <div>
      <p>
        Wrote by. {user.name}({user.email})
      </p>
      <Posts loadingPosts={loadingPosts} posts={posts} />
    </div>
  );
}

export default User;
