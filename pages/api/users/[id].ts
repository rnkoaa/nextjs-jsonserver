import path from "path";
import { promises as fs } from "fs";

import { User } from "../../../types";
import { NextApiRequest, NextApiResponse } from "next";

interface ErrorMessage {
  message: string;
  code: number;
}

let users: Map<string, User | null> = new Map();

// load users from user db file 
export const loadUserData = async (): Promise<Map<string, User | null>> => {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + "/users.json", "utf8");
  const userData = JSON.parse(fileContents);

  return new Map(
    userData.map((obj: User) => {
      return [`${obj.id}`, obj];
    })
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorMessage | null>
) {
  if (users.entries.length == 0) {
    users = await loadUserData();
  }
  const url = req.url;
  if (!url) {
    return res.status(400).json({ code: 400, message: "unable to parse url" });
  }
  const urlParts = url.split("/");
  const numberOfParts = urlParts.length;
  let id = "";
  if (numberOfParts > 1) {
    id = urlParts[numberOfParts - 1];
  }

  const user = users.get(id);
  if (!user) {
    return res
      .status(404)
      .json({ code: 404, message: `User with id ${id} cannot be found` });
  }

  res.status(200).json(user);
}
