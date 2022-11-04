
import { database } from "../../../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "../../../../../../../src";
import { ErrorMessage } from "../../../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | ErrorMessage>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const postIdParam: string = req.query.postId as string;

  if (!postIdParam) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request params" } as ErrorMessage);
  }

  const postId = parseInt(postIdParam, 10);
  if (isNaN(postId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for postId" });
  }

  const posts = database.posts!.findComments(postId);
  if (!posts) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${postId} did not have any posts` });
  }

  res.status(200).json(posts);
}
