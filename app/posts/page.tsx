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

const Page = () => {

  const posts = use(getPosts());
  console.log(posts.length)
  return (
    <>


    </>
  );
};

export default Page;
