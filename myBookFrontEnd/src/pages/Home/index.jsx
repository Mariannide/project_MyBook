import { Link } from "react-router-dom";
import backgroundImage from "../../images/colori.jpg";
import fotolibro from "../../images/fotolibro.jpeg";

export default function Home() {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "800px",
        }}
      >
        <div>
          <div
            className="card mx-auto"
            style={{ width: "40%", height: "40vh", backgroundColor: "#ffa500" }}
          >
            <div className="card-body text-center">
              <h3 className="card-title" style={{ fontFamily:"cursive"}}>
                “Nothing is ever completely finished.” “Nothing is ever
                completely finished.” -Leiris, 1939
              </h3>
              <p className="card-text">
                <span style={{ fontFamily:"cursive"}}>
                  With this concept, Leiris wanted to highlight how man's creative
                  activity was constantly moving; it is this very concept that
                  has guided my book: <span style={{fontWeight:"bold"}}>"Aldo Melillo- Le opere di un artista
                  irpino"</span>
                </span>
                <br />
                <br />
                <Link
                  className="btn btn-danger"
                  to={"OrderForm"}
                  style={{ height: "30vh", marginLeft:"200px" }}
                >
                  <img
                    src={fotolibro}
                    alt="Booking image"
                    style={{ height: "100%"}}
                  />
                 <span style={{fontFamily:"cursive"}}>Press to book :)</span> 
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
