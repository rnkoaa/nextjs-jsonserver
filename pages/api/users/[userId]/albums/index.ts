

import { database } from "../../../db";

import { NextApiRequest, NextApiResponse } from "next";
import { Album } from "../../../../../src/";
import { ErrorMessage } from "../../../../shared";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Album[] | ErrorMessage>
) {
  if (!database.initialized) {
    await database.onLoad();
  }
  const albumIdParam: string = req.query.albumId as string;
  if (!albumIdParam) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request params" } as ErrorMessage);
  }

  const albumId = parseInt(albumIdParam, 10);
  if (isNaN(albumId)) {
    return res
      .status(400)
      .json({ code: 400, message: "Bad request param for albumId" });
  }

  const albums = database.albums!.findById(albumId);
  if (!albums) {
    return res
      .status(404)
      .json({ code: 404, message: `album with id ${albumId} did not have any albums` });
  }

  res.status(200).json(albums);
}
