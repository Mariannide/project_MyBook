import fotoprofilo from "../../images/fotoprofilo.jpg";
import { Carousel } from "react-bootstrap";
import studio1 from "../../images/studio1.jpg";
import studio2 from "../../images/studio2.jpg";
import studio3 from "../../images/studio3.jpg";

export default function Bio() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <div>
        <div
          className="d-flex justify-content-between container"
          style={{ marginTop: "8%" }}
        >
          <img
            src={fotoprofilo}
            alt="image"
            style={{ width: "50vh", height: "50vh" }}
          />

          <p className="col-6" style={{ lineHeight: "2" }}>
            Marianna Laudisi is originally from Montefalcione (AV) but currently
            lives in Sevilla. Born in 1990, she has a degree in Education
            Sciences and Anthropology and Ethnology from the "Alma Mater
            Studiorum" University of Bologna. She completed an international
            master's degree in Anthropology in Seville. An tireless traveler and
            citizen of the world, she has a strong sensitivity to contemporary
            social issues. She has always supported the requests for
            self-determination from various social groups that are unfortunately
            often condemned to marginalization. She volunteers and activist in
            various fields: feminism, immigration, disability, and LGBTQ+
            issues. This is her first book.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            height: "100px",
            background: "red",
            marginTop: "10%",
          }}
        >
          <h4>MOMENT OF INSPIRATIONS</h4>
        </div>
        
        <div className="d-flex justify-content-center">
          <Carousel style={{ width: "50%", height: "50%", marginTop: "10%" }}>
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
    </div>
  );
}
