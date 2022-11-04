import { database } from "../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../src/shared/user.model";
import { ErrorMessage } from "../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage | null>
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
  if (!user) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${userId} cannot be found` });
  }

  res.status(200).json(user);
}
