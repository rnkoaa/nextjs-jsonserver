import NavLink from "./nav-link";
import "../styles/globals.css";

import "bootstrap-icons/font/bootstrap-icons.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title> Nested Layouts by example</title>
      </head>
      <body>
        <div className="container">
          <div className="nav-scroller py-1 mb-2 col-lg-10 mx-auto py-md-5">
            <nav className="nav d-flex">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/users">Users</NavLink>
              <NavLink href="/posts">Posts</NavLink>
              <NavLink href="/albums">Albums</NavLink>
            </nav>
          </div>
        </div>
        <div className="col-lg-10 mx-auto p-4 py-md-5">
          <main>
            {children}
            {/* <div className="row g-5"> */}
            {/*   <div className="col-md-4">{children}</div> */}
            {/*   <div className="col-md-8"></div> */}
            {/* </div> */}

            {/* <h1>Get started with Bootstrap</h1>
            <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>

            <div className="mb-5">
              <a href="/docs/5.2/examples/" className="btn btn-primary btn-lg px-4">Download examples</a>
            </div>

            <hr className="col-3 col-md-2 mb-5" />

            <div className="row g-5">
              <div className="col-md-6">
                <h2>Starter projects</h2>
                <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
                <ul className="icon-list ps-0">
                  <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
                  <li className="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h2>Guides</h2>
                <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                <ul className="icon-list ps-0">
                  <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">Bootstrap quick start guide</a></li>
                  <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                  <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                  <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">Bootstrap Vite guide</a></li>
                  <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">Contributing to Bootstrap</a></li>
                </ul>
              </div>
            </div> */}
          </main>
          <footer className="pt-5 my-5 text-muted border-top">
            Created by the Bootstrap team &middot; &copy; 2022
          </footer>
        </div>
      </body>
    </html>
  );
}
