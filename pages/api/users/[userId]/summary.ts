import { database } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../src/shared/user.model";
import { ErrorMessage } from "../../../shared";

export interface UserSummary {
  todos: number;
  albums: number;
  posts: number;
  user: User;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSummary | ErrorMessage | null>
) {
  const userIdParam: string = req.query.userId as string;

  if (!userIdParam) {
    return res.status(400).json({ code: 400, message: "Bad request params" });
  }

  const userId = parseInt(userIdParam, 10);
  if (isNaN(userId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for userId" });
  }

  const userService = database.users!;

  const user = userService.findById(userId);
  const todos = userService.countTodos(userId);
  const albums = userService.countAlbums(userId);
  const posts = userService.countPosts(userId);
  if (!user) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${userId} cannot be found` });
  }

  res.status(200).json({
    todos,
    albums,
    posts,
    user,
  });
}
