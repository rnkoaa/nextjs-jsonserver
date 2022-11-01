import { User } from "../../../../types";
import { NextApiRequest, NextApiResponse } from "next";
import { loadUserData } from "../../db";

interface ErrorMessage {
  message: string;
  code: number;
}

let users: Map<string, User | null> = new Map();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage | null>
) {
  const url = req.url;
  if (!url) {
    return res.status(400).json({ code: 400, message: "unable to parse url" });
  }
  const urlParts = url.trim().split("/");
  const numberOfParts = urlParts.length;
  let id = "";

  if (numberOfParts > 1) {
    id = urlParts[numberOfParts - 1];
  }

  if (users.entries.length == 0) {
    users = await loadUserData(urlParts[2]);
  }

  const user = users.get(id);
  if (!user) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${id} cannot be found` });
  }

  res.status(200).json(user);
}
