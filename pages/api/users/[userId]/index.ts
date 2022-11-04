import { database } from "../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../src/shared/user.model";

interface ErrorMessage {
  message: string;
  code: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage | null>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ code: 400, message: "Bad request params" });
  }

  const user = database.users!.findById(+userId);
  if (!user) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${userId} cannot be found` });
  }

  res.status(200).json(user);
}
