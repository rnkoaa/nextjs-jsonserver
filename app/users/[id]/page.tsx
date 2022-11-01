import "./styles.css";

import PostForm from "./post-form";
import ThreadedComments from "./threaded-comments";
import CommentWithImage from "./comment-with-image";
import CommentWithVideo from "./comment-with-video";
import LoadMoreComments from "./load-more-comments";
import UserActivitySummaryCard from "./user-activity-summary-card";
import UserSummaryCard from "./user-summary-card";
import UserInboxCard from "./user-inbox-card";
import UserTeamMembersCard from "./user-team-members";
import UserUpcomingEvents from "./user-upcoming-events";

const Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {<UserSummaryCard />}
          {<UserActivitySummaryCard />}
          {<UserInboxCard />}
          {<UserTeamMembersCard />}
          {<UserUpcomingEvents />}
        </div>

        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              {<PostForm />}
              {<ThreadedComments />}
              {<CommentWithImage />}
              {<CommentWithVideo />}
              {<LoadMoreComments />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
