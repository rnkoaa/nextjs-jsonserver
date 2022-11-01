const CommentWithImage = () => {
  return (
    <div className="border border-light p-2 mb-3">
      <div className="d-flex align-items-start">
        <img
          className="me-2 avatar-sm rounded-circle"
          src="https://bootdey.com/img/Content/avatar/avatar3.png"
          alt="Generic placeholder image"
        />
        <div className="w-100">
          <h5 className="m-0">Jeremy Tomlinson</h5>
          <p className="text-muted">
            <small>about 2 minuts ago</small>
          </p>
        </div>
      </div>
      <p>Story based around the idea of time lapse, animation to post soon!</p>

      <img
        src="https://via.placeholder.com/800x540/FF7F50/000000"
        alt="post-img"
        className="rounded me-1"
        height="60"
      />
      <img
        src="https://via.placeholder.com/800x540/FF7F50/000000"
        alt="post-img"
        className="rounded me-1"
        height="60"
      />
      <img
        src="https://via.placeholder.com/800x540/FF7F50/000000"
        alt="post-img"
        className="rounded"
        height="60"
      />

      <div className="mt-2">
        <a
          href="javascript: void(0);"
          className="btn btn-sm btn-link text-muted"
        >
          <i className="mdi mdi-reply"></i> Reply
        </a>
        <a
          href="javascript: void(0);"
          className="btn btn-sm btn-link text-muted"
        >
          <i className="mdi mdi-heart-outline"></i> Like
        </a>
        <a
          href="javascript: void(0);"
          className="btn btn-sm btn-link text-muted"
        >
          <i className="mdi mdi-share-variant"></i> Share
        </a>
      </div>
    </div>
  );
};

export default CommentWithImage;
