import fotoprofilo from "../../images/fotoprofilo.jpg";
import { Carousel } from "react-bootstrap";
import studio1 from "../../images/studio1.jpg";
import studio2 from "../../images/studio2.jpg";
import studio3 from "../../images/studio3.jpg";
import flow from "../../images/flow.jpg";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <>
      <div style={{ backgroundColor: "beige" }}>
        <div>
          <div
            className="d-flex justify-content-between container"
            style={{ backgroundColor: "#0D4D00" }}
          >
            <img
              className="col-3"
              src={fotoprofilo}
              alt="image"
              style={{
                width: "50vh",
                height: "50vh",
                marginTop: "5%",
                borderRadius: "10px",
              }}
            />
            <div
              className="col-6"
              style={{
                backgroundColor: "grey",
                borderRadius: "10px",
                margin: "20px",
                marginTop: "10%",
                maxWidth: "600px",
              }}
            >
              <p
                style={{
                  lineHeight: "2",
                  fontFamily: "baskerville",
                  padding: "3%",
                  fontSize: "2.5vh",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "3vh" }}>BIO</span>
                <br />
                Marianna Laudisi is originally from Montefalcione (AV) but
                currently lives in Sevilla. Born in 1990, she has a degree in
                Education Sciences and Anthropology and Ethnology from the "Alma
                Mater Studiorum" University of Bologna. She completed an
                international master's degree in Anthropology in Seville. An
                tireless traveler and citizen of the world, she has a strong
                sensitivity to contemporary social issues. She has always
                supported the requests for self-determination from various
                social groups that are unfortunately often condemned to
                marginalization. She volunteers and activist in various fields:
                feminism, immigration, disability, and LGBTQ+ issues. This is
                her first book.
              </p>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "300px",
              marginTop: "10%",
              backgroundImage: `url(${flow})`,
            }}
          >
            <h4
              style={{
                textAlign: "center",
                color: "whitesmoke",
                fontWeight: "bold",
              }}
            >
              MOMENT OF INSPIRATIONS
            </h4>
            <p
              style={{
                color: "whitesmoke",
                fontFamily: "baskerville",
                padding: "3%",
                fontSize: "3vh",
                lineHeight: "1.5",
              }}
            >
              "What is the sacred for me?" Starting from this question and
              inspired by the author Leiris, whose concept of the sacred he
              tried to go beyond the official definition of the sacred
              constituted by religion, homeland, and moral power. "Sacred" as a
              concept associated with what is important in everyday life,
              childhood, or memories. So why not go back to my childhood? I
              spent several months working on this project, a project that
              required me to: "Take from the wardrobe of memories those few
              clothes that, altered and ironed on the line of the pen, will give
              us, when we wear them, the impression of changing skin."
            </p>
          </div>

          <div
            style={{
              marginTop: "5%",
              marginLeft: "10%",
              border: " 5px solid green",
              borderRadius: "20px",
              padding: "10px",
              width: "20%",
            }}
          >
            <h4 style={{ fontFamily: "baskerville", fontWeight: "bolder" }}>
              Archival repository
            </h4>
          </div>

          <div className="d-flex justify-content-center">
            <Carousel
              style={{
                width: "50%",
                height: "50%",
                marginTop: "3%",
                marginBottom: "5%",
              }}
            >
              <Carousel.Item>
                <img
                  src={studio1}
                  alt="image"
                  style={{ width: "100%", height: "400%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={studio2}
                  alt="image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={studio3}
                  alt="image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <Link
          to={"/"}
          className="btn btn-success col-1"
          style={{ marginTop: "3%" }}
        >
          Back
        </Link>
      </div>
    </>
  );
}
