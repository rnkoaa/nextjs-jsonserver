import { database } from "../../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../../../../../src";
import { ErrorMessage } from "../../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | ErrorMessage | null>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const todoIdParam: string = req.query.todoId as string;

  if (!todoIdParam) {
    return res.status(400).json({ code: 400, message: "Bad request params" });
  }

  const todoId = parseInt(todoIdParam, 10);
  if (isNaN(todoId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for todoId" });
  }

  const todo = database.todos!.findById(todoId);
  if (!todo) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${todoId} cannot be found` });
  }

  res.status(200).json(todo);
}
