import { NextPage } from "next";
import { Todo } from "../../../src/shared/todo.model";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem: NextPage<TodoItemProps> = ({ todo }) => {
  return (
    <div className="d-flex align-items-center py-1" id="tooltips-container6">
      <div className="w-100 ms-3">
        <h6 className="mb-0 font-14">{todo.title}</h6>
      </div>
      {todo.completed && (
        <a href="#">
          <i className="bi bi-check-lg"></i>
        </a>
      )}
      {!todo.completed && (
        <input type="checkbox" className="form-check-input" id="same-address" />
      )}
    </div>
  );
};

export default TodoItem;
