const UserUpcomingEvents = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="dropdown float-end">
          <a
            href="#"
            className="dropdown-toggle arrow-none card-drop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a href="javascript:void(0);" className="dropdown-item">
              Sales Report
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              Export Report
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              Profit
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              Action
            </a>
          </div>
        </div>

        <h4 className="header-title mb-3">
          Upcoming Reminders <i className="mdi mdi-adjust ms-1"></i>
        </h4>

        <div className="list-group">
          <a href="#" className="my-1">
            <div className="d-flex align-items-start" id="tooltips-container">
              <div className="">
                <i className="mdi mdi-circle h3 text-primary"></i>
              </div>
              <div className="w-100 ms-2">
                <h5 className="mb-1 mt-0">New Admin Layout Discuss</h5>
                <ul className="list-inline text-muted font-12">
                  <li className="list-inline-item">
                    <i className="mdi mdi-calendar-blank-outline me-1"></i>
                    10 May 2021
                  </li>
                  <li className="list-inline-item"> - </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                    09:00am <span className="px-1">To</span> 10:30am
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a href="#" className="my-1">
            <div className="d-flex align-items-start" id="tooltips-container">
              <div className="">
                <i className="mdi mdi-circle h3 text-pink"></i>
              </div>
              <div className="w-100 ms-2">
                <h5 className="mb-1 mt-0">Landing Pages Planning</h5>
                <ul className="list-inline text-muted font-12">
                  <li className="list-inline-item">
                    <i className="mdi mdi-calendar-blank-outline me-1"></i>
                    10 May 2021
                  </li>
                  <li className="list-inline-item"> - </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                    02:00pm <span className="px-1">To</span> 4:00pm
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a href="#" className="my-1">
            <div className="d-flex align-items-start" id="tooltips-container">
              <div className="">
                <i className="mdi mdi-circle h3 text-success"></i>
              </div>
              <div className="w-100 ms-2">
                <h5 className="mb-1 mt-0">Meet Our Clients</h5>
                <ul className="list-inline text-muted font-12">
                  <li className="list-inline-item">
                    <i className="mdi mdi-calendar-blank-outline me-1"></i>
                    11 May 2021
                  </li>
                  <li className="list-inline-item"> - </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                    08:00am <span className="px-1">To</span> 11:20am
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a href="#" className="my-1">
            <div className="d-flex align-items-start" id="tooltips-container">
              <div className="">
                <i className="mdi mdi-circle h3 text-warning"></i>
              </div>
              <div className="w-100 ms-2">
                <h5 className="mb-1 mt-0">Project Discussion</h5>
                <ul className="list-inline text-muted font-12">
                  <li className="list-inline-item">
                    <i className="mdi mdi-calendar-blank-outline me-1"></i>
                    11 May 2021
                  </li>
                  <li className="list-inline-item"> - </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                    12:00am <span className="px-1">To</span> 03:00am
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <a href="#" className="my-1">
            <div className="d-flex align-items-start" id="tooltips-container">
              <div className="">
                <i className="mdi mdi-circle h3 text-dark"></i>
              </div>
              <div className="w-100 ms-2">
                <h5 className="mb-1 mt-0">Businees Meeting</h5>
                <ul className="list-inline text-muted font-12">
                  <li className="list-inline-item">
                    <i className="mdi mdi-calendar-blank-outline me-1"></i>
                    12 May 2021
                  </li>
                  <li className="list-inline-item"> - </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                    08:30am <span className="px-1">To</span> 10:00am
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserUpcomingEvents;
