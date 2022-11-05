import "./styles.module.css";

import Link from "next/link";
import { User } from "../src/shared/user.model";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="col-xl-3 col-sm-6 my-2">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a
              className="text-muted dropdown-toggle font-size-16"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
            >
              <i className="bi bi-three-dots"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">
                Edit
              </a>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Remove
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                alt=""
                className="avatar-md rounded-circle img-thumbnail"
              />
            </div>
            <div className="flex-1 ms-3">
              <h6 className="font-size-16 mb-1">
                <Link className="text-dark" href={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </h6>
              <span className="badge badge-soft-danger mb-0">
                UI/UX Designer
              </span>
            </div>
          </div>
          <div className="mt-3 pt-1">
            <p className="text-muted mb-0">
              <i className="bi bi-telephone-fill font-size-15 align-middle pe-2 text-primary"></i>{" "}
              {user.phone}
            </p>
            <p className="text-muted mb-0 mt-2">
              <i className="bi bi-envelope-fill font-size-15 align-middle pe-2 text-primary"></i>{" "}
              {user.email}
            </p>
            <p className="text-muted mb-0 mt-2">
              <i className="bi bi-geo-alt-fill font-size-15 align-middle pe-2 text-primary"></i>{" "}
              52 Ilchester MYBSTER 9WX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
