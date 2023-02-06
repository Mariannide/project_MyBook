function Nav() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Marianna Laudisi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Curiosity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News Letter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FB
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Insta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
