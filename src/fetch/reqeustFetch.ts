function fetchUser(userId: number) {
  let user: any = null;
  const suspender = fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      user = data;
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}

function fetchPosts(userId: number) {
  let posts: any = null;
  const suspender = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      posts = data;
    });
  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
}

function fetchData(userId: number) {
  return {
    user: fetchUser(userId),
    posts: fetchPosts(userId),
  };
}

export default fetchData;
