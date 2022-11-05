import { User } from "./user.model";

export interface UserSummary {
  todos: number;
  albums: number;
  posts: number;
  user?: User;
}
