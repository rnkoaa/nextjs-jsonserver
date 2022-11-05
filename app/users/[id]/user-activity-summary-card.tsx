import { NextPage } from "next";

interface Props {
  todos: number
  albums: number
  posts: number
}
const UserActivitySummaryCard: NextPage<Props> = ({todos, albums, posts}) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <div className="row">
          <div className="col-4 border-end border-light">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Todos </h5>
            <h2 className="mb-0 fw-bold">{todos}</h2>
          </div>
          <div className="col-4 border-end border-light">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Albums </h5>
            <h2 className="mb-0 fw-bold">{albums}</h2>
          </div>
          <div className="col-4">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Posts </h5>
            <h2 className="mb-0 fw-bold">{posts}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivitySummaryCard;
