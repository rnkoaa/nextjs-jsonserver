import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Post } from "../users";

describe("PostService - ", () => {
  test("load all posts from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.posts!.findAll().length).toEqual(100);
  });

  test("non existent post will return null", async () => {
    const db = new Db();
    await db.onLoad();

    const post = db.posts!.findById(1000000);
    expect(post).toBeNull();
  });

  test("load an post from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const expectedPost: Post = {
      id: 1,
      userId: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    const post = db.posts!.findById(1);
    expect(post).not.toBeNull();
    expect(post).toEqual(expectedPost);
  });

  test("load comments for an post from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const comments = db.posts!.findComments(1);
    expect(comments).not.toBeNull();
    expect(comments.length).toEqual(5);
  });
});
