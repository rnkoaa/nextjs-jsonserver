import { database } from "../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../../../../src";
import { ErrorMessage } from "../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[] | ErrorMessage>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const userIdParam: string = req.query.userId as string;

  if (!userIdParam) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request params" } as ErrorMessage);
  }

  const userId = parseInt(userIdParam, 10);
  if (isNaN(userId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for userId" });
  }

  const todos = database.users!.findTodos(userId);
  if (!todos) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${userId} did not have any todos` });
  }

  res.status(200).json(todos);
}
