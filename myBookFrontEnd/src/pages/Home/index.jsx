import { Link } from "react-router-dom";
import backgroundImage from "../../images/colori.jpg";
import fotolibro from "../../images/fotolibro.jpeg";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container">
          <div
            className="card mx-auto"
            style={{ width: "40%", height: "40vh", backgroundColor: "#ffa500",
            }}
          >
            <div className="card-body text-center">
              <h3 className="card-title" style={{ fontFamily: "cursive" }}>
              "Nothing is ever completely finished." - Leiris, 1939
              </h3>
              <br/>
              <br/>
              <p className="card-text">
                <span style={{ fontFamily: "cursive" }}>
                  "With this concept, Leiris wanted to underline how human
                  creative activity is constantly in motion; it is precisely
                  this concept that guided my book:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    "Aldo Melillo - The works of an Irpinian artist."
                  </span>
                  </span>
                  <br />
                <br />
                <Link
                  className="btn btn-danger"
                  to={"OrderForm"}
                  style={{
                    height: "20vh",
                    width: "30vh",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={fotolibro}
                    alt="Immagine prenotazione"
                    style={{ height: "100%" }}
                  />
                  <span style={{ fontFamily: "cursive" }}>
                    Press to book :)
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
