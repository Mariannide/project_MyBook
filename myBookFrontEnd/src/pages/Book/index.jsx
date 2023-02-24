import { data } from "../../data";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import backgroundImage from "../../images/sfondoBo.jpg";
import fotolibro from "../../images/fotolibro.jpeg";

export default function Book() {
  return data.map((book) => (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          objectFit: "cover",
        }}
      >
        <br />
        <br />
        <h1
          style={{
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          {" "}
          {book.title}
        </h1>
        <div>
          <Carousel style={{ width: "50%", height: "50%" }}>
            <Carousel.Item>
              <img
                src={img1}
                alt="image"
                style={{ width: "100%", height: "400%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img2}
                alt="image"
                style={{ width: "100%", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img3}
                alt="image"
                style={{ width: "100%", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img5}
                alt="image"
                style={{ width: "100%", height: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img6}
                alt="image"
                style={{ width: "100%", height: "100%" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="d-flex justify-content-center">
          <div className="container" style={{ width: "200%", height: "200%" }}>
            <img
              src={fotolibro}
              alt="image"
              style={{ width: "400px", height: "600px" }}
            />
          </div>
          <div className="container d-flex justify-content-between">
            <div
              style={{
                backgroundColor: "aquamarine",
                border: "3px solid black",
                padding: "10px",
                width: "%",
              }}
            >
              <p>
                {" "}
                {book.resume}
                In this work, I showcase the works of an Irpino artist; an
                artist known in Campania(South of Italy) but less so throughout
                the rest of Italy. The overall goal was to bring his name beyond
                regional borders. The artist is Aldo Melillo, and from a very
                young age, he had a artistic talent that later introduced him to
                the world of teaching. The artist studied at the Institute and
                at the Academy of Fine Arts in Naples, and later became a
                professor in the State Schools in the cities of Avellino,
                Paternopoli (AV), and in his home town, where he also held the
                role of vice-principal until his retirement in 1993-94. Since
                1960, he has set up numerous exhibitions and participated in
                many shows and contests.
              </p>
            </div>

            <p
              className="col-8"
              style={{
                lineHeight: "2",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            ></p>
          </div>
          <br />

          <Link to={"/"} className="btn btn-danger">
            Back
          </Link>
        </div>
      </div>
    </div>
  ));
}
