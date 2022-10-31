const ThreadedComments = () => {
  return (
    <>
      <div className="border border-light p-2 mb-3">
        <div className="d-flex align-items-start">
          <img
            className="me-2 avatar-sm rounded-circle"
            src="https://bootdey.com/img/Content/avatar/avatar4.png"
            alt="Generic placeholder image"
          />
          <div className="w-100">
            <h5 className="">
              Thelma Fridley <small className="text-muted"> 1 hour ago</small>
            </h5>
            <div className="">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              <br />
              <a
                href="javascript: void(0);"
                className="text-muted font-13 d-inline-block mt-2"
              >
                <i className="mdi mdi-reply"></i> Reply
              </a>
            </div>
          </div>
        </div>

        <div className="post-user-comment-box">
          <div className="d-flex align-items-start">
            <img
              className="me-2 avatar-sm rounded-circle"
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              alt="Generic placeholder image"
            />
            <div className="w-100">
              <h5 className="mt-0">
                Jeremy Tomlinson{" "}
                <small className="text-muted">3 hours ago</small>
              </h5>
              Nice work, makes me think of The Money Pit.
              <br />
              <a
                href="javascript: void(0);"
                className="text-muted font-13 d-inline-block mt-2"
              >
                <i className="mdi mdi-reply"></i> Reply
              </a>
              <div className="d-flex align-items-start mt-3">
                <a className="pe-2" href="#">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    className="avatar-sm rounded-circle"
                    alt="Generic placeholder image"
                  />
                </a>
                <div className="w-100">
                  <h5 className="mt-0">
                    Kathleen Thomas{" "}
                    <small className="text-muted">5 hours ago</small>
                  </h5>
                  i'm in the middle of a timelapse animation myself! (Very
                  different though.) Awesome stuff.
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-start mt-2">
            <a className="pe-2" href="#">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="rounded-circle"
                alt="Generic placeholder image"
                height="31"
              />
            </a>
            <div className="w-100">
              <input
                type="text"
                id="simpleinput"
                className="form-control border-0 form-control-sm"
                placeholder="Add comment"
              />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <a
            href="javascript: void(0);"
            className="btn btn-sm btn-link text-danger"
          >
            <i className="mdi mdi-heart"></i> Like (28)
          </a>
          <a
            href="javascript: void(0);"
            className="btn btn-sm btn-link text-muted"
          >
            <i className="mdi mdi-share-variant"></i> Share
          </a>
        </div>
      </div>
    </>
  );
};

export default ThreadedComments;
