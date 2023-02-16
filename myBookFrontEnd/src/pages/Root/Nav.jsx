import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <div>
      <div className="fixed-top">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#ff5733" }}
        >
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontFamily: "inherit", fontSize: "30px" }}
          >
            Marianna Laudisi
          </Link>
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
            <ul className="navbar-nav" style={{ marginLeft: "600px" }}>
              <li className="nav-item">
                <a className="nav-link" href="/book">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bio">
                  Bio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Curiosity
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Interviews
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Presentations
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/randomOnMe">
                      Random on me
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News Letter
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/mariannidee/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Insta
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
