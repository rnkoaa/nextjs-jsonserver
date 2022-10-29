import { use } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  return postRes.json();
};

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

const Page = () => {

  // const users = await getUsers()
  const users = use(getUsers())
  // const posts = use(getPosts());
  console.log(users)
  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <div>{u.id} {u.name} -> {u.username}</div>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Page;
