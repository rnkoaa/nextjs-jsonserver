
import { database } from "../db";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../src/shared/user.model";

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  if (!database.initialized) {
    console.log("loading database")
    await database.onLoad();
  }
  const users = database.users!.findAll();
  res.status(200).json(users);
}
