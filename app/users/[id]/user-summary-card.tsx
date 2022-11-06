import { NextPage } from "next";
import { UserSummary } from "../../../src";

interface Props {
  userSummary: UserSummary;
}

const UserSummaryCard: NextPage<Props> = ({ userSummary }: Props) => {
  const { user } = userSummary;
  if (!user) {
    return <div>User is not found</div>;
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="dropdown float-end">
          <a
            href="#"
            className="dropdown-toggle arrow-none card-drop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a href="#" className="dropdown-item">
              Edit
            </a>
            <a href="#" className="dropdown-item">
              Delete
            </a>
            <a href="#" className="dropdown-item">
              Block
            </a>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            className="rounded-circle avatar-lg img-thumbnail"
            alt="profile-image"
          />
          <div className="w-100 ms-3">
            <h4 className="my-0">{user.name}</h4>
            <p className="text-muted">@{user.username}</p>
            <button
              type="button"
              className="btn btn-soft-primary btn-xs waves-effect mb-2 waves-light"
            >
              Follow
            </button>
            <button
              type="button"
              className="btn btn-soft-success btn-xs waves-effect mb-2 waves-light"
            >
              Message
            </button>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-13 text-uppercase">About Me :</h4>
          <p className="text-muted font-13 mb-3">
            Hi I'm Johnathn Deo,has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type.
          </p>
          <p className="text-muted mb-2 font-13">
            <strong>Full Name :</strong>{" "}
            <span className="ms-2">{user.name}</span>
          </p>

          {user.phone && (
            <p className="text-muted mb-2 font-13">
              <strong>Mobile :</strong>
              <span className="ms-2">{user.phone}</span>
            </p>
          )}
          <p className="text-muted mb-2 font-13">
            <strong>Email :</strong> <span className="ms-2">{user.email}</span>
          </p>

          <p className="text-muted mb-1 font-13">
            <strong>Location :</strong> <span className="ms-2">USA</span>
          </p>
        </div>

        <ul className="social-list list-inline mt-3 mb-0">
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item text-center border-primary text-primary"
            >
              <i className="mdi mdi-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item text-center border-danger text-danger"
            >
              <i className="mdi mdi-google"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item text-center border-info text-info"
            >
              <i className="mdi mdi-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item text-center border-secondary text-secondary"
            >
              <i className="mdi mdi-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSummaryCard;
