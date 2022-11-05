import { NextPage } from "next";
import { Todo } from "../../../src/shared/todo.model";

interface TodoItemProps {
  todo: Todo

}
const TodoItem: NextPage<TodoItemProps> = ( {todo}) => {
  return (
    <div className="d-flex align-items-center py-1" id="tooltips-container6">
      {/* <img */}
      {/*   src="https://bootdey.com/img/Content/avatar/avatar8.png" */}
      {/*   className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" */}
      {/*   alt="" */}
      {/* /> */}
      <div className="w-100 ms-3">
        <h5 className="mb-1">{todo.title}</h5>
        {/* <p className="mb-0 font-13">Hey! there I'm available...</p> */}
      </div>
      <a
        href="#"
        className="btn btn-sm btn-soft-info font-13"
        data-bs-container="#tooltips-container6"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title=""
        data-bs-original-title="Reply"
      >
        {" "}
        <i className="mdi mdi-reply"></i>{" "}
      </a>
    </div>
  );
};

export default TodoItem
