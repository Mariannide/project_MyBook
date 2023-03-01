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
    <>
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
                fontFamily: "Baskerville",
                fontWeight: "bold",
                padding: "10%",
                fontSize: "6vh",
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
                  border: " 5px solid violet",
                  borderRadius: "20px",
                  padding: "10px",
                  fontFamily: "Baskerville",
                }}
              >
                <p>
                  {" "}
                  <span> {book.quote}</span>
                  Michel Leiris (1901-1990) wrote this phrase to highlight how
                  the creative activity of humans is always in motion. This
                  concept guided my thesis. In this work, I present the works of
                  an artist from Irpinia, an artist known in Campania but less
                  so in the rest of Italy. The general objective was precisely
                  to bring his name outside the regional boundaries. The artist
                  is Aldo Melillo, who since a very young age has enjoyed an
                  artistic talent that later led him into teaching. The main
                  objective of my work was, in addition to making the works
                  known, to give order to the material that Prof. Melillo left
                  behind: an archive full of unpublished works. In discovering
                  the unpublished works, through interviews and information
                  received from his family and friends, I also analyzed official
                  works that "dress up" the small town of Montefalcione, the
                  artist's birthplace. For this work, I relied on the help
                  offered by the artist's relatives and friends: I cataloged the
                  unpublished works, investigated the public works describing
                  them through my anthropological knowledge, and through the
                  reading materials found in the artist's private archive. The
                  thesis begins with descriptions of the unpublished works,
                  followed by the works commented on by critics during the
                  exhibitions organized by Prof. Aldo Melillo, and finally the
                  public works that can be admired in Montefalcione: the
                  artist's gift to his birthplace where he lived all his life.
                  Aldo Melillo, a figurative and contemporary artist, is
                  remembered as a taciturn man. Everything that he did not
                  express in words, as one can see, was expressed through his
                  unique passion: art in all its forms.
                </p>
                <div className="d-flex justify-content-end"></div>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-between"
            style={{
              marginTop: "5%",
              backgroundColor: "beige",
              border: "3px solid violet",
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
              <h4
                style={{
                  textAlign: "center",
                  fontFamily: "Baskerville",
                  fontWeight: "bold",
                }}
              >
                Quick Facts:
              </h4>

              <h5 style={{ fontFamily: "Baskerville" }}>
                <span style={{ fontFamily: "Baskerville", fontWeight: "bold" }}>
                  Birth:
                </span>
                21/02/1938
              </h5>
              <h5 style={{ fontFamily: "Baskerville" }}>
                <span style={{ fontFamily: "Baskerville", fontWeight: "bold" }}>
                  Place of Birth:
                </span>
                Montefalcione (Av)- Italy
              </h5>
              <br />
              <h5 style={{ fontFamily: "Baskerville" }}>
                <span style={{ fontFamily: "Baskerville", fontWeight: "bold" }}>
                  Biography:
                </span>
              </h5>

              <p style={{ fontFamily: "Baskerville" }}>
                Aldo Melillo is an artist known in Campania(South of Italy) but
                less so throughout the rest of Italy. Aldo Melillo, from a very
                young age, had a artistic talent that later introduced him to
                the world of teaching. The artist studied at the Institute and
                at the Academy of Fine Arts in Naples, and later became a
                professor in the State Schools in the cities of Avellino,
                Paternopoli (AV), and in his home town, where he also held the
                role of vice-principal until his retirement in 1993-94. Since
                1960, he has set up numerous exhibitions and participated in
                many shows and contests.
              </p>
            </div>
          </div>
          <Link to={"/"} className="btn btn-success col-1">
            Back
          </Link>
        </div>
      </div>
    </>
  ));
}
