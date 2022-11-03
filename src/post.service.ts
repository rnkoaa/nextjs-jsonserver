import { CommentService } from "./comment.service";
import { Post } from "./shared/post.model";
import { Comment } from "./shared/comment.model";

export class PostService {
  private readonly postData: Post[];
  private readonly commentService: CommentService;
  private readonly postDataMap: Map<number, Post | null>;

  constructor(_postData: Post[], _commentService: CommentService) {
    this.postData = _postData;
    this.commentService = _commentService;
    this.postDataMap = new Map(
      _postData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Post[] {
    return this.postData;
  }

  findByUser(userId: number): Post[] {
    return this.postData.filter((post) => post.userId === userId);
  }

  findById(id: number): Post | null {
    const found = this.postDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }

  findComments(postId: number): Comment[] {
    return this.commentService.findByPost(postId);
  }
}
