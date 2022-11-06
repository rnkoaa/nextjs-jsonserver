import "./styles.css";

import UserSummaryCard from "./user-summary-card";
import { use } from "react";
import { UserSummary } from "../../../src";
import UserActivitySummaryCard from "./user-activity-summary-card";
import UserInboxCard from "./user-inbox-card";
import UserPostsCard from "./user-posts-card"
import UserTeamMembersCard from "./user-team-members";

const getUser = async (id: number): Promise<UserSummary> => {
  const res = await fetch(`http://localhost:3000/api/users/${id}/summary`);
  return res.json();
};

interface UserParam {
  id: number;
}

interface ParamProp {
  params: UserParam;
}

const Page = ({ params }: ParamProp) => {
  const { id } = params;
  const userSummary = use(getUser(id));
  const { todos, albums, posts } = userSummary;

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {<UserSummaryCard userSummary={userSummary} />}
          {
            <UserActivitySummaryCard
              todos={todos}
              albums={albums}
              posts={posts}
            />
          }
          {<UserTeamMembersCard userId={id} />} 
        </div>

        <div className="col-xl-6">
          {<UserInboxCard userId={id} />}
          {<UserPostsCard userId={id} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
