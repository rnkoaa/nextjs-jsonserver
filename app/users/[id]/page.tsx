import "./styles.css";

import UserSummaryCard from "./user-summary-card";
import { use } from "react";
import { UserSummary } from "../../../src";

const getUser = async (id: number): Promise<UserSummary> => {
  // try {
  const res = await fetch(`http://localhost:3000/api/users/${id}/summary`);
  return res.json();
  // } catch (error) {
  //   console.log(error);
  // }
  // return {todos: 0, posts: 0, albums: 0, user: null};
};
// const fetchUser = async (id: number): UserSummary =>
//   await fetch().then((res) => res.json());

interface UserParam {
  id: number;
}

interface ParamProp {
  params: UserParam;
}

const Page = ({ params }: ParamProp) => {
  const { id } = params;
  const userSummary = use(getUser(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {<UserSummaryCard userSummary={userSummary} />}
          {/* {<UserActivitySummaryCard />} */}
          {/* {<UserInboxCard />} */}
          {/* {<UserTeamMembersCard />} */}
          {/* {<UserUpcomingEvents />} */}
        </div>

        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              {/* {<PostForm />} */}
              {/* {<ThreadedComments />} */}
              {/* {<CommentWithImage />} */}
              {/* {<CommentWithVideo />} */}
              {/* {<LoadMoreComments />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
