import './styles.css'

import PostForm from './post-form'
import ThreadedComments from './threaded-comments';

const Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" className="dropdown-item">Edit</a>
                  <a href="javascript:void(0);" className="dropdown-item">Delete</a>
                  <a href="javascript:void(0);" className="dropdown-item">Block</a>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
                <div className="w-100 ms-3">
                  <h4 className="my-0">Geneva McKnight</h4>
                  <p className="text-muted">@webdesigner</p>
                  <button type="button" className="btn btn-soft-primary btn-xs waves-effect mb-2 waves-light">Follow</button>
                  <button type="button" className="btn btn-soft-success btn-xs waves-effect mb-2 waves-light">Message</button>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="font-13 text-uppercase">About Me :</h4>
                <p className="text-muted font-13 mb-3">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>
                <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">Geneva D. McKnight</span></p>

                <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">(123) 123 1234</span></p>

                <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2">user@email.domain</span></p>

                <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ms-2">USA</span></p>
              </div>

              <ul className="social-list list-inline mt-3 mb-0">
                <li className="list-inline-item">
                  <a href="javascript: void(0);" className="social-list-item text-center border-primary text-primary"><i className="mdi mdi-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);" className="social-list-item text-center border-danger text-danger"><i className="mdi mdi-google"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);" className="social-list-item text-center border-info text-info"><i className="mdi mdi-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);" className="social-list-item text-center border-secondary text-secondary"><i className="mdi mdi-github"></i></a>
                </li>
              </ul>
            </div>
          </div>

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

          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-3">Inbox</h4>

              <div className="inbox-widget" data-simplebar="init" style={{ ['max-height' as any]: '350px' }}>
                <div className="simplebar-wrapper" style={{ ['margin' as any]: '0px' }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div></div>
                  <div className="simplebar-mask">
                    <div className="simplebar-offset" style={{ ["right" as any]: "0px", ["bottom" as any]: "0px" }}>
                      <div className="simplebar-content-wrapper" style={{ ["height" as any]: 'auto', ['overflow' as any]: 'hidden scroll' }}>
                        <div className="simplebar-content" style={{ ["padding" as any]: '0px' }}>
                          <div className="d-flex align-items-center pb-1" id="tooltips-container">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Tomaslau</h5>
                              <p className="mb-0 font-13">I've finished it! See you so...</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container1">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Stillnotdavid</h5>
                              <p className="mb-0 font-13">This theme is awesome!</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container1" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container2">
                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Shahedk</h5>
                              <p className="mb-0 font-13">Hey! there I'm available...</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container2" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container3">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Kurafire</h5>
                              <p className="mb-0 font-13">Nice to meet you</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container3" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container4">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Adhamdannaway</h5>
                              <p className="mb-0 font-13">This theme is awesome!</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container4" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container5">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Tomaslau</h5>
                              <p className="mb-0 font-13">I've finished it! See you so...</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container5" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center py-1" id="tooltips-container6">
                            <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Shahedk</h5>
                              <p className="mb-0 font-13">Hey! there I'm available...</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container6" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                          <div className="d-flex align-items-center pt-1" id="tooltips-container7">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                            <div className="w-100 ms-3">
                              <h5 className="mb-1">Stillnotdavid</h5>
                              <p className="mb-0 font-13">This theme is awesome!</p>
                            </div>
                            <a href="javascript:(0);" className="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container7" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Reply"> <i className="mdi mdi-reply"></i> </a>
                          </div>
                        </div></div></div></div>
                  <div className="simplebar-placeholder" style={{ ["width" as any]: 'auto', ['height' as any]: "532px" }}>

                  </div></div>
                <div className="simplebar-track simplebar-horizontal" style={{ ["visibility" as any]: "hidden" }}>
                  <div className="simplebar-scrollbar" style={{ ["width" as any]: "0px", ["display" as any]: 'none' }}></div>

                </div>
                <div className="simplebar-track simplebar-vertical" style={{ ["visibility" as any]: "visible" }}>
                  <div className="simplebar-scrollbar" style={{ ["height" as any]: "230px", ["transform" as any]: "translate3d(0px, 0px, 0px)", ["display" as any]: "block" }}>

                  </div></div></div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                  <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                  <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>

              <h4 className="header-title mb-3">Team Members <i className="mdi mdi-account-multiple ms-1"></i></h4>

              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex align-items-center pb-1" id="tooltips-container">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                    <div className="w-100 ms-2">
                      <h5 className="mb-1">Herbert Stewart<i className="mdi mdi-check-decagram text-info ms-1"></i></h5>
                      <p className="mb-0 font-13 text-muted">Co Founder</p>
                    </div>
                    <i className="mdi mdi-chevron-right h2"></i>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex align-items-center pb-1" id="tooltips-container">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                    <div className="w-100 ms-2">
                      <h5 className="mb-1">Terry Mouser</h5>
                      <p className="mb-0 font-13 text-muted">Web Designer</p>
                    </div>
                    <i className="mdi mdi-chevron-right h2"></i>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex align-items-center pb-1" id="tooltips-container">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                    <div className="w-100 ms-2">
                      <h5 className="mb-1">Adam Barney</h5>
                      <p className="mb-0 font-13 text-muted">PHP Developer</p>
                    </div>
                    <i className="mdi mdi-chevron-right h2"></i>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex align-items-center pb-1" id="tooltips-container">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt="" />
                    <div className="w-100 ms-2">
                      <h5 className="mb-1">Michal Chang</h5>
                      <p className="mb-0 font-13 text-muted">UI/UX Designer</p>
                    </div>
                    <i className="mdi mdi-chevron-right h2"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-vertical"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                  <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                  <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>

              <h4 className="header-title mb-3">Upcoming Reminders <i className="mdi mdi-adjust ms-1"></i></h4>

              <div className="list-group">
                <a href="#" className="my-1">
                  <div className="d-flex align-items-start" id="tooltips-container">
                    <div className="">
                      <i className="mdi mdi-circle h3 text-primary"></i>
                    </div>
                    <div className="w-100 ms-2">
                      <h5 className="mb-1 mt-0">New Admin Layout Discuss</h5>
                      <ul className="list-inline text-muted font-12">
                        <li className="list-inline-item"><i className="mdi mdi-calendar-blank-outline me-1"></i>10 May 2021</li>
                        <li className="list-inline-item"> - </li>
                        <li className="list-inline-item"><i className="mdi mdi-clock-time-eight-outline me-1"></i>09:00am <span className="px-1">To</span> 10:30am</li>
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
                        <li className="list-inline-item"><i className="mdi mdi-calendar-blank-outline me-1"></i>10 May 2021</li>
                        <li className="list-inline-item"> - </li>
                        <li className="list-inline-item"><i className="mdi mdi-clock-time-eight-outline me-1"></i>02:00pm <span className="px-1">To</span> 4:00pm</li>
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
                        <li className="list-inline-item"><i className="mdi mdi-calendar-blank-outline me-1"></i>11 May 2021</li>
                        <li className="list-inline-item"> - </li>
                        <li className="list-inline-item"><i className="mdi mdi-clock-time-eight-outline me-1"></i>08:00am <span className="px-1">To</span> 11:20am</li>
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
                        <li className="list-inline-item"><i className="mdi mdi-calendar-blank-outline me-1"></i>11 May 2021</li>
                        <li className="list-inline-item"> - </li>
                        <li className="list-inline-item"><i className="mdi mdi-clock-time-eight-outline me-1"></i>12:00am <span className="px-1">To</span> 03:00am</li>
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
                        <li className="list-inline-item"><i className="mdi mdi-calendar-blank-outline me-1"></i>12 May 2021</li>
                        <li className="list-inline-item"> - </li>
                        <li className="list-inline-item"><i className="mdi mdi-clock-time-eight-outline me-1"></i>08:30am <span className="px-1">To</span> 10:00am</li>
                      </ul>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              {<PostForm />}

              {<ThreadedComments />}
              <div className="border border-light p-2 mb-3">
                <div className="d-flex align-items-start">
                  <img className="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image" />
                  <div className="w-100">
                    <h5 className="m-0">Jeremy Tomlinson</h5>
                    <p className="text-muted"><small>about 2 minuts ago</small></p>
                  </div>
                </div>
                <p>Story based around the idea of time lapse, animation to post soon!</p>

                <img src="https://via.placeholder.com/800x540/FF7F50/000000" alt="post-img" className="rounded me-1" height="60" />
                <img src="https://via.placeholder.com/800x540/FF7F50/000000" alt="post-img" className="rounded me-1" height="60" />
                <img src="https://via.placeholder.com/800x540/FF7F50/000000" alt="post-img" className="rounded" height="60" />

                <div className="mt-2">
                  <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-reply"></i> Reply</a>
                  <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-heart-outline"></i> Like</a>
                  <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-share-variant"></i> Share</a>
                </div>
              </div>

              <div className="border border-light p-2 mb-3">
                <div className="d-flex align-items-start">
                  <img className="me-2 avatar-sm rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Generic placeholder image" />
                  <div className="w-100">
                    <h5 className="m-0">Jeremy Tomlinson</h5>
                    <p className="text-muted"><small>15 hours ago</small></p>
                  </div>
                </div>
                <p>The parallax is a little odd but O.o that house build is awesome!!</p>

                <iframe src="https://player.vimeo.com/video/87993762" height="300" className="img-fluid border-0"></iframe>
              </div>

              <div className="text-center">
                <a href="javascript:void(0);" className="text-danger">
                  <i className="mdi mdi-spin mdi-loading me-1"></i> Load more </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
