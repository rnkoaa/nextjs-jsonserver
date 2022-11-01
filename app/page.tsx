import { use } from "react";
import "./styles.module.css";
import UserCard from "./user-card";
import UserPagination from "./user-pagination";

import { User } from "../types";
const getUsers = async (): Promise<User[]> => {
  const userData = await fetch("http://localhost:3000/api/users");
  return userData.json();
};

export default function Page() {
  const users = use(getUsers());

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="mb-3">
            <h5 className="card-title">
              Contact List{" "}
              <span className="text-muted fw-normal ms-2">(834)</span>
            </h5>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
            <div>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="List"
                  >
                    <i className="bi bi-list-task"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    aria-current="page"
                    href="#"
                    className="router-link-active router-link-exact-active nav-link active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Grid"
                  >
                    <i className="bi bi-grid"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target=".add-new"
                className="btn btn-primary"
              >
                <i className="bi bi-plus me-1"></i> Add New
              </a>
            </div>
            <div className="dropdown">
              <a
                className="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
      <UserPagination />
    </div>
  );
}
