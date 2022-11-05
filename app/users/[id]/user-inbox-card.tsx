import { NextPage } from "next";
import { use } from "react";
import { Todo } from "../../../src/shared/todo.model";
import TodoItem from "./todo-item";

interface Props {
  userId: number;
}

const getUserTodos = async (userId: number): Promise<Todo[]> => {
  const res = await fetch(`http://localhost:3000/api/users/${userId}/todos`);
  return res.json();
};
const UserInboxCard: NextPage<Props> = ({ userId }) => {
  const todos = use(getUserTodos(userId));

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="header-title mb-3">Todos</h4>

        <div
          className="inbox-widget"
          data-simplebar="init"
          style={{ ["max-height" as any]: "600px" }}
        >
          <div
            className="simplebar-wrapper"
            style={{ ["margin" as any]: "0px" }}
          >
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{
                  ["right" as any]: "0px",
                  ["bottom" as any]: "0px",
                }}
              >
                <div
                  className="simplebar-content-wrapper"
                  style={{
                    ["height" as any]: "auto",
                    ["overflow" as any]: "hidden scroll",
                  }}
                >
                  <div
                    className="simplebar-content"
                    style={{ ["padding" as any]: "0px" }}
                  >
                    {todos.map((todo) => (
                      <TodoItem todo={todo} key={todo.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{
                ["width" as any]: "auto",
                ["height" as any]: "532px",
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ ["visibility" as any]: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                ["width" as any]: "0px",
                ["display" as any]: "none",
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ ["visibility" as any]: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                ["height" as any]: "230px",
                ["transform" as any]: "translate3d(0px, 0px, 0px)",
                ["display" as any]: "block",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInboxCard;
