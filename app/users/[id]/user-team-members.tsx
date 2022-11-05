import { NextPage } from "next";
import { use } from "react";
import { Album } from "../../../src";

interface AlbumProp {
  userId: number;
}

const getUserAlbums = async (userId: number): Promise<Album[]> => {
  const res = await fetch(`http://localhost:3000/api/users/${userId}/albums`);
  return res.json();
};
const UserTeamMembersCard: NextPage<AlbumProp> = ({ userId }) => {
  const albums = use(getUserAlbums(userId));

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
          {albums.map((album) => (
            <a key={album.id} href="#" className="list-group-item list-group-item-action">
              <div
                className="d-flex align-items-center pb-1"
                id="tooltips-container"
              >
                <div className="w-100 ms-2">
                  <h5 className="mb-1">
                    {album.title}
                    <i className="mdi mdi-check-decagram text-info ms-1"></i>
                  </h5>
                </div>
                <i className="mdi mdi-chevron-right h2"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTeamMembersCard;
