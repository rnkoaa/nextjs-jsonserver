const CommentWithVideo = () => {
  return (
    <div className="border border-light p-2 mb-3">
      <div className="d-flex align-items-start">
        <img
          className="me-2 avatar-sm rounded-circle"
          src="https://bootdey.com/img/Content/avatar/avatar6.png"
          alt="Generic placeholder image"
        />
        <div className="w-100">
          <h5 className="m-0">Jeremy Tomlinson</h5>
          <p className="text-muted">
            <small>15 hours ago</small>
          </p>
        </div>
      </div>
      <p>The parallax is a little odd but O.o that house build is awesome!!</p>

      <iframe
        src="https://player.vimeo.com/video/87993762"
        height="300"
        className="img-fluid border-0"
      ></iframe>
    </div>
  );
};

export default CommentWithVideo;
