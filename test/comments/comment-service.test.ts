import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Comment } from "../users";

describe("CommentService - ", () => {
  test("load all comments from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.comments!.findAll().length).toEqual(500);
  });

  test("non existent comment will return null", async () => {
    const db = new Db();
    await db.onLoad();

    const comment = db.comments!.findById(1000000);
    expect(comment).toBeNull();
  });

  test("load an comment from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const expectedComment: Comment = {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    };

    const comment = db.comments!.findById(1);
    expect(comment).not.toBeNull();
    expect(comment).toEqual(expectedComment);
  });

  test("load comments for an comment from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const comments = db.comments!.findByPost(1);
    expect(comments).not.toBeNull();
    expect(comments.length).toEqual(5);
  });
});
