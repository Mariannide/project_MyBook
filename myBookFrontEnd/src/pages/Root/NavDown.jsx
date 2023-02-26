import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavDown() {
  return (
    <div style={{ backgroundColor: "#183A1D" }}>
      <div
        style={{ background: "#ffa500", height: "3px", width: "100%" }}
      ></div>

      <div style={{ maxWidth: "200%"}}>
        <div className="container-fluid text-white d-flex flex-wrap justify-content-between">
          <div className="row">
            <div className="col-xs-12 col-sm-6" style={{ marginTop: "40px" }}>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
                style={{ textAlign: "left" }}
              >
                <a
                  href="https://www.amazon.it/Melillo-opere-artista-irpino-illustrata/dp/8855002287"
                  className="btn btn-danger d-inline-block mx-2 my-1"
                >
                  Amazon
                </a>
                <a
                  href="https://www.lafeltrinelli.it/aldo-melillo-opere-di-artista-libro-marianna-laudisi/e/9788855002288"
                  className="btn btn-danger d-inline-block mx-2 my-1"
                >
                  Feltrinelli
                </a>
                <a
                  href="https://www.ibs.it/aldo-melillo-opere-di-artista-libro-marianna-laudisi/e/9788855002288"
                  className="btn btn-danger d-inline-block mx-2 my-1"
                >
                  IbS
                </a>
                <a
                  href="https://www.mondadoristore.it/Aldo-Melillo-opere-artista-Marianna-Laudisi/eai978885500228/"
                  className="btn btn-danger d-inline-block mx-2 my-1"
                >
                  Mondadori
                </a>
                <a
                  href="https://www.nepedizioni.com/marianna-laudisi/#:~:text=Marianna%20Laudisi%20%C3%A8%20originaria%20di,internazionale%20in%20Antropologia%20a%20Siviglia."
                  className="btn btn-danger d-inline-block mx-2 my-1"
                >
                  NeP Edizioni
                </a>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 d-flex justify-content-end"
              style={{ marginTop: "40px" }}
            >
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li className="nav-item mx-2">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/mariannidee/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "violet", fontSize: "30px" }}
                      className="align-middle"
                    />
                  </a>
                </li>

                <li
                  className="nav-item d-inline-block align-middle"
                  style={{ marginRight: "30px" }}
                >
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "white", fontSize: "30px" }}
                      className="align-middle"
                    />
                  </a>
                </li>
              </ul>
              <div>
                <p style={{ fontFamily: "inherit" }}>
                  Email: laudisimarianna@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
