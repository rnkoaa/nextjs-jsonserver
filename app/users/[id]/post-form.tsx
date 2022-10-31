const PostForm = () => {
  return (
    <form action="#" className="comment-area-box mb-3">
      <span className="input-icon">
        <textarea
          className="form-control"
          placeholder="Write something..."
        ></textarea>
      </span>
      <div className="comment-area-btn">
        <div className="float-end">
          <button
            type="submit"
            className="btn btn-sm btn-dark waves-effect waves-light"
          >
            Post
          </button>
        </div>
        <div>
          <a href="#" className="btn btn-sm btn-light text-black-50">
            <i className="far fa-user"></i>
          </a>
          <a href="#" className="btn btn-sm btn-light text-black-50">
            <i className="fa fa-map-marker-alt"></i>
          </a>
          <a href="#" className="btn btn-sm btn-light text-black-50">
            <i className="fa fa-camera"></i>
          </a>
          <a href="#" className="btn btn-sm btn-light text-black-50">
            <i className="far fa-smile"></i>
          </a>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
