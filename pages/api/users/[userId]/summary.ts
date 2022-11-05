import { database } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { ErrorMessage } from "../../../shared";
import { UserSummary } from "../../../../src/shared/user-summary.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSummary | ErrorMessage | null>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
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

  const user = database.users!.findById(userId);
  const todos = database.users!.countTodos(userId);
  const albums = database.users!.countAlbums(userId);
  const posts = database.users!.countPosts(userId);
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
