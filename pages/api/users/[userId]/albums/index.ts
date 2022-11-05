

import { database } from "../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { ErrorMessage } from "../../../../shared";
import { Album } from "../../../../../src/shared/album.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Album[] | ErrorMessage>
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

  const albums = database.albums!.findByUser(userId);
  if (!albums) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${userId} did not have any albums` });
  }

  res.status(200).json(albums);
}
