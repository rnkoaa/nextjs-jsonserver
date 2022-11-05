import { NextPage } from "next";
import { Album } from "../../../src";

interface AlbumProp {
  userId: number
}

// const getUserAlbums(userId: number): Promise<Album[]> {
//   fetch("http://jsonplaceholder.typicode.com/albums")
// }
const UserTeamMembersCard: NextPage<AlbumProp> = ({userId}) => {
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
              Sales Report
            </a>
            <a href="#" className="dropdown-item">
              Export Report
            </a>
            <a href="#" className="dropdown-item">
              Profit
            </a>
            <a href="#" className="dropdown-item">
              Action
            </a>
          </div>
        </div>

        <h4 className="header-title mb-3">
          Albums
          <i className="mdi mdi-account-multiple ms-1"></i>
        </h4>

        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <div
              className="d-flex align-items-center pb-1"
              id="tooltips-container"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                alt=""
              />
              <div className="w-100 ms-2">
                <h5 className="mb-1">
                  Herbert Stewart
                  <i className="mdi mdi-check-decagram text-info ms-1"></i>
                </h5>
                <p className="mb-0 font-13 text-muted">Co Founder</p>
              </div>
              <i className="mdi mdi-chevron-right h2"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div
              className="d-flex align-items-center pb-1"
              id="tooltips-container"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                alt=""
              />
              <div className="w-100 ms-2">
                <h5 className="mb-1">Terry Mouser</h5>
                <p className="mb-0 font-13 text-muted">Web Designer</p>
              </div>
              <i className="mdi mdi-chevron-right h2"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div
              className="d-flex align-items-center pb-1"
              id="tooltips-container"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar8.png"
                className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                alt=""
              />
              <div className="w-100 ms-2">
                <h5 className="mb-1">Adam Barney</h5>
                <p className="mb-0 font-13 text-muted">PHP Developer</p>
              </div>
              <i className="mdi mdi-chevron-right h2"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div
              className="d-flex align-items-center pb-1"
              id="tooltips-container"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                alt=""
              />
              <div className="w-100 ms-2">
                <h5 className="mb-1">Michal Chang</h5>
                <p className="mb-0 font-13 text-muted">UI/UX Designer</p>
              </div>
              <i className="mdi mdi-chevron-right h2"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserTeamMembersCard;
