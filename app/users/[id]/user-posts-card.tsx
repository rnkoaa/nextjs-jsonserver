import { NextPage } from "next";
import { use } from "react";
import { Post } from "../../../src";
import PostItem from "./post-item";

interface UserPostsCardProps {
  userId: number;
}

const getUserPosts = async (userId: number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/api/users/${userId}/posts?limit=5`);
  return res.json();
};
const UserPostsCard: NextPage<UserPostsCardProps> = ({ userId }) => {
  const posts = use(getUserPosts(userId));

  return (
    <div className="card">
      {posts.map((post: Post) => (
        <PostItem post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default UserPostsCard;
