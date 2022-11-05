import { NextPage } from "next";
import { Post } from "../../../src";

interface PostItemProp {
  post: Post;
}

const PostItem: NextPage<PostItemProp> = ({ post }) => {
  return (
    <div className="card">
      {/* <div className="border border-light p-2 mb-3"> */}
        <div className="d-flex align-items-start p-4">
          <img
            className="me-2 mt-2 avatar-sm rounded-circle"
            src="https://bootdey.com/img/Content/avatar/avatar4.png"
            alt="Generic placeholder image"
          />
          <div className="w-100">
            <h5 className="">
              {post.title}
              <small className="text-muted"> 1 hour ago</small>
            </h5>
            <div className="">
              {post.body}
              <br />
              <a href="#" className="text-muted font-13 d-inline-block mt-2">
                <i className="mdi mdi-reply"></i> Reply
              </a>
            </div>
          </div>
        </div>

        <div className="mx-4 py-2">
          <a href="#" className="btn btn-sm btn-link text-danger">
            <i className="mdi mdi-heart"></i> Like (28)
          </a>
          <a href="#" className="btn btn-sm btn-link text-muted">
            <i className="mdi mdi-share-variant"></i> Share
          </a>
        </div>
      </div>
    // </div>
  );
};

export default PostItem;
