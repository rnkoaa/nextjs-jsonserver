import { promises as fs } from "fs";
import path from "path";

import { AlbumService } from "./album.service";
import { CommentService } from "./comment.service";
import { PhotoService } from "./photo.service";

export class Database {
  private readonly albums?: AlbumService;
  private readonly comments?: CommentService;
  private readonly photos?: PhotoService;
  private readonly posts?: PostService;
  private readonly todos?: TodoService;
  private readonly users?: UserService;

  constructor() {}
  async onLoad(): Promise<void> {
    const userData: User[] = await this._loadData<User>("users");
    const albumData: Album[] = await this._loadData<Album>("albums");
    const todoData: Todo[] = await this._loadData<Todo>("todos");
    const postData: Post[] = await this._loadData<Post>("posts");
    const commentData: Comment[] = await this._loadData<Comment>("comments");
    const photoData: Photo[] = await this._loadData<Photo>("photos");
    this.comments = new CommentService(commentData);
    this.photos = new PhotoService(photoData);
    this.albums = new AlbumService(albumData, this.photos!);
    this.posts = new PostService(postData, this.comments!);
    this.todos = new TodoService(todoData);
    this.users = new UserService(
      userData,
      this.albums!,
      this.posts!,
      this.todos!
    );
  }

  private async _loadData<T>(context: string): Promise<T[]> {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      jsonDirectory + `/${context}.json`,
      "utf8"
    );
    return <T[]>JSON.parse(fileContents);
  }
}
