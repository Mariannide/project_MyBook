import fotoprofilo from "../../images/fotoprofilo.jpg";
import { Carousel } from "react-bootstrap";
import studio1 from "../../images/studio1.jpg";
import studio2 from "../../images/studio2.jpg";
import studio3 from "../../images/studio3.jpg";
import flow from "../../images/flow.jpg";

export default function Bio() {
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
      <div>
        <div
          className="d-flex justify-content-between container"
          style={{ backgroundColor:"blue",}}
        >

          <img className="col-3"
            src={fotoprofilo}
            alt="image"
            style={{ width: "50vh", height: "50vh", marginTop:"5%"}}
          />
          <div className="col-6" style={{backgroundColor: "grey", borderRadius: "10px", margin: "20px", marginTop:"10%", maxWidth: "600px"}}>
            <p style={{ lineHeight: "2" }}>
              <h3>BIO</h3>
              <br/>
              Marianna Laudisi is originally from Montefalcione (AV) but
              currently lives in Sevilla. Born in 1990, she has a degree in
              Education Sciences and Anthropology and Ethnology from the "Alma
              Mater Studiorum" University of Bologna. She completed an
              international master's degree in Anthropology in Seville. An
              tireless traveler and citizen of the world, she has a strong
              sensitivity to contemporary social issues. She has always
              supported the requests for self-determination from various social
              groups that are unfortunately often condemned to marginalization.
              She volunteers and activist in various fields: feminism,
              immigration, disability, and LGBTQ+ issues. This is her first
              book.
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
          <h4>MOMENT OF INSPIRATIONS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tempore voluptates nemo magni nulla, quam recusandae facilis
            voluptatum, dicta nesciunt cupiditate in ipsa error natus vel
            adipisci. Enim, incidunt omnis? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. A magni ad voluptate eaque minus dolor
            velit adipisci dicta dolorem et, ducimus, vero sint! Eligendi
            voluptatibus debitis et explicabo adipisci non?
          </p>
        </div>

        <div
          style={{
            marginTop: "5%",
            marginLeft: "10%",
            border: " 5px solid black",
            borderRadius: "20px",
            padding: "10px",
            width: "30%",
          }}
        >
          <h4>Archival repository</h4>
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
    </div>
  );
}
