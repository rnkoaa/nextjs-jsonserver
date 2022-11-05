import { database } from "../../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../../../../../src";
import { ErrorMessage } from "../../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | ErrorMessage | null>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const postIdParam: string = req.query.postId as string;

  if (!postIdParam) {
    return res.status(400).json({ code: 400, message: "Bad request params" });
  }

  const postId = parseInt(postIdParam, 10);
  if (isNaN(postId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for postId" });
  }

  const post = database.posts!.findById(postId);
  if (!post) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${postId} cannot be found` });
  }

  res.status(200).json(post);
}
