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
import studioArtista from "../../images/studioArtista.jpg";

export default function Book() {
  return data.map((book) => (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          objectFit: "cover",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "30px",
              padding: "5%",
            }}
          >
            {" "}
            {book.title}
          </h1>
          <div className="d-flex justify-content-center">
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

          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "10%" }}
          >
            <img
              src={fotolibro}
              alt="image"
              style={{ width: "50vh", height: "70vh", borderRadius: "5px" }}
            />
            <div
              className="col-6"
              style={{
                backgroundColor: "beige",
                border: " 5px solid black",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              {" "}
              {book.resume}
              In this work, I showcase the works of an Irpino artist; an artist
              known in Campania(South of Italy) but less so throughout the rest
              of Italy. The overall goal was to bring his name beyond regional
              borders. The artist is Aldo Melillo, and from a very young age, he
              had a artistic talent that later introduced him to the world of
              teaching. The artist studied at the Institute and at the Academy
              of Fine Arts in Naples, and later became a professor in the State
              Schools in the cities of Avellino, Paternopoli (AV), and in his
              home town, where he also held the role of vice-principal until his
              retirement in 1993-94. Since 1960, he has set up numerous
              exhibitions and participated in many shows and contests.
              <div className="d-flex justify-content-end">
                {" "}
                //una volta che ho finito il testo, metto il margin top 50%
                <Link to={"/"} className="btn btn-success col-1">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between"
          style={{
            marginTop: "5%",
            backgroundColor: "beige",
            border: "3px solid black",
            borderRadius: "20px",
          }}
        >
          <img
            src={studioArtista}
            alt="image"
            style={{
              height: "50vh",
              width: "80vh",
              borderRadius: "20px",
            }}
          />
          <div className="col-6">
            <h5 style={{ textAlign: "center" }}>Quick Facts:</h5>

            <p>
              <span>Birth:</span>
            </p>
            <p>
              <span>Place of Birth</span>
            </p>
            <p>
              <span>Biography:</span>
            </p>
            <p>
              In this work, I showcase the works of an Irpino artist; an artist
              known in Campania(South of Italy) but less so throughout the rest
              of Italy. The overall goal was to bring his name beyond regional
              borders. The artist is Aldo Melillo, and from a very young age, he
              had a artistic talent that later introduced him to the world of
              teaching. The artist studied at the Institute and at the Academy
              of Fine Arts in Naples, and later became a professor in the State
              Schools in the cities of Avellino, Paternopoli (AV), and in his
              home town, where he also held the role of vice-principal until his
              retirement in 1993-94. Since 1960, he has set up numerous
              exhibitions and participated in many shows and contests.
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}
