import { Todo } from "./shared/todo.model";

export class TodoService {
  private readonly todoData: Todo[];
  private readonly todoDataMap: Map<number, Todo | null>;

  constructor(_todoData: Todo[]) {
    this.todoData = _todoData;
    this.todoDataMap = new Map(
      _todoData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Todo[] {
    return this.todoData;
  }

  findById(id: number): Todo | null {
    const found = this.todoDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }

  findByUser(userId: number): Todo[] {
    return this.todoData.filter((todo) => todo.userId === userId);
  }
}
