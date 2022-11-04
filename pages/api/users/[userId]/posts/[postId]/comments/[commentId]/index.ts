

import {database} from "../../../../../../db"
import {Comment} from "../../../../../../../../src"
import { NextApiRequest, NextApiResponse } from "next";
import { ErrorMessage } from "../../../../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment | ErrorMessage | null>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const commentIdParam: string = req.query.commentId as string;

  if (!commentIdParam) {
    return res.status(400).json({ code: 400, message: "Bad request params" });
  }

  const commentId = parseInt(commentIdParam, 10);
  if (isNaN(commentId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for commentId" });
  }

  const comment = database.comments!.findById(commentId);
  if (!comment) {
    return res
      .status(404)
      .json({ code: 404, message: `Comment with id ${commentId} cannot be found` });
  }

  res.status(200).json(comment);
}
