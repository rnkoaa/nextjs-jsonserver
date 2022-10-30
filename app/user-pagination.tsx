const UserPagination = () => {
  return (
    <div className="row g-0 align-items-center pb-4">
      <div className="col-sm-6">
        <div>
          <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="float-sm-end">
          <ul className="pagination mb-sm-0">
            <li className="page-item disabled">
              <a href="#" className="page-link">
                <i className="mdi mdi-chevron-left"></i>
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="mdi mdi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserPagination;
