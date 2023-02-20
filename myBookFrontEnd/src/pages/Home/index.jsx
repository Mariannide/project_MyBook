import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";

export default function Home() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-end">
        <Link
          className="btn btn-danger"
          to={"OrderForm"}
          style={{ position: "fixed" }}
        >
          Booking here!
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <div className="container" style={{ width: "200%", height: "200%" }}>
          <Carousel style={{ width: "100%", height: "100%" }}>
            <Carousel.Item>
              <img src={img1} alt="image" style={{ width: "65%", height: "55%" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="image" style={{ width: "65%", height: "55%" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="image" style={{ width: "65%", height: "55%" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img5} alt="image" style={{ width: "65%", height: "55%" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img6} alt="image" style={{ width: "65%", height: "55%" }}/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
