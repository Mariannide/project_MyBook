import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#003300", height: "85px" }}>
          <div className="container-fluid">
            <Link className="navbar-brand mx-auto" to="/" style={{ fontFamily: "Opens Sans", fontSize: "30px", color: "white", textTransform: "uppercase" }}>
              Marianna Laudisi
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <div className="navbar-nav">
                <div className="nav-item" style={{ fontFamily: "Opens Sans", fontSize: "25px", color: "white" }}>
                  <Link className="nav-link text-white" to="/book">
                    Book
                  </Link>
                </div>
                <div className="nav-item" style={{ fontFamily: "Opens Sans", fontSize: "25px", color: "white" }}>
                  <Link className="nav-link text-white" to="/bio">
                    Author
                  </Link>
                </div>
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "Opens Sans", fontSize: "25px", color: "#FFFFFF" }}>
                    About
                  </a>
                  <div className="dropdown-menu">
                    <div>
                      <Link className="dropdown-item" to="#">
                        Interviews
                      </Link>
                    </div>
                    <div>
                      <Link className="dropdown-item" to="#">
                        Presentations
                      </Link>
                    </div>
                    <div>
                      <hr className="dropdown-divider"></hr>
                    </div>
                    <div>
                      <Link className="dropdown-item" to="/randomOnMe">
                        Random on me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
