import { promises as fs } from "fs";
import path from "path";
import { AlbumService } from "./album.service";
import {CommentService} from './comment.service'
import { PhotoService } from "./photo.service";
import { PostService } from "./post.service";
import { TodoService } from "./todo.service";
import { UserService } from "./user.service";
import { User } from "./shared/user.model";
import {Album} from './shared/album.model'
import {Comment} from './shared/comment.model'
import {Photo} from './shared/photo.model'
import {Post} from './shared/post.model'
import {Todo} from './shared/todo.model'


export class Database {
  albums?: AlbumService;
  comments?: CommentService;
  photos?: PhotoService;
  posts?: PostService;
  todos?: TodoService;
  users?: UserService;

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
