import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + "/users.json", "utf8");
  const users = JSON.parse(fileContents)
  res.status(200).json(users);
}
