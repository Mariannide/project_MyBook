import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="fixed" style={{ position: "sticky", top: 0, left: 0, right: 0 }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#003300", height: "85px" }}>
          <div className="container-fluid">
            <Link className="navbar-brand mx-auto" to="/" style={{ fontFamily: "Open Sans", fontSize: "30px", color: "white", textTransform: "uppercase", fontWeight: "bold" }}>
              Marianna Laudisi
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/book" style={{ fontFamily: "Open Sans", fontSize: "25px", color: "white" }}>Book</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/bio" style={{ fontFamily: "Open Sans", fontSize: "25px", color: "white" }}>Author</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "Open Sans", fontSize: "25px", color: "white" }}>About</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item" activeClassName="active" to="/inspiration">InSpirationS</NavLink></li>
                    <li><NavLink className="dropdown-item" activeClassName="active" to="/interview">Interviews</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
