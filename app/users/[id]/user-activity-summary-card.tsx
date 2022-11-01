const UserActivitySummaryCard = () => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <div className="row">
          <div className="col-4 border-end border-light">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Applied</h5>
            <h2 className="mb-0 fw-bold">116</h2>
          </div>
          <div className="col-4 border-end border-light">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Reviewed</h5>
            <h2 className="mb-0 fw-bold">87</h2>
          </div>
          <div className="col-4">
            <h5 className="text-muted mt-1 mb-2 fw-normal">Contacted</h5>
            <h2 className="mb-0 fw-bold">98</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivitySummaryCard;
