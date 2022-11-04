
import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Todo } from "../users";

describe("TodoService - ", () => {
  test("load all todos from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.todos!.findAll().length).toEqual(200);
  });

  test("non existent todo will return null", async () => {
    const db = new Db();
    await db.onLoad();


    const todo = db.todos!.findById(1000000);
    expect(todo).toBeNull();
  });

  test("load an todo from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const expectedTodo: Todo = {
      id: 1,
      userId: 1,
      title: "delectus aut autem",
      completed: false
    };

    const todo = db.todos!.findById(1);
    expect(todo).not.toBeNull();
    expect(todo).toEqual(expectedTodo);
  });

});
