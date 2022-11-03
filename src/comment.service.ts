import {Comment} from "./shared/comment.model"
export class CommentService {
  private readonly commentData: Comment[];
  private readonly commentDataMap: Map<number, Comment | null>;

  constructor(_commentData: Comment[]) {
    this.commentData = _commentData;
    this.commentDataMap = new Map(
      _commentData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Comment[] {
    return this.commentData;
  }

  findById(id: number): Comment | null {
    const found = this.commentDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }

  findByPost(postId: number): Comment[] {
    return this.commentData.filter((c) => c.postId === postId);
  }
}

