import React from "react";
import art from "../../images/art.jpeg";
import butler from "../../images/butler.png";
import dizionario from "../../images/dizionario.jpeg";
import dono from "../../images/dono.jpeg";
import durand from "../../images/durand.jpeg";
import durkeim from "../../images/durkeim.jpeg";
import filosofia from "../../images/filosofia.jpeg";
import freud from "../../images/freud.jpeg";
import gajano from "../../images/gajano.jpeg";
import cosa from "../../images/cosa.jpeg";
import kandinsky from "../../images/kandinsky.jpeg";
import leiris from "../../images/leiris.jpeg";
import sacro from "../../images/sacro.jpeg";
import simboli from "../../images/simboli.jpeg";
import uomo from "../../images/uomo.jpeg";
import otto from "../../images/otto.jpeg";
import modernità from "../../images/modernità.png";
import qualco from "../../images/qualco.jpeg";

function Inspiration() {
  const images = [
    { url: modernità, title: "" },
    { url: qualco, title: "" },
    { url: otto, title: "" },
    { url: art, title: "arte" },
    { url: butler, title: "butler" },
    { url: dizionario, title: "" },
    { url: dono, title: "" },
    { url: durand, title: "" },
    { url: durkeim, title: "" },
    { url: filosofia, title: "" },
    { url: freud, title: "" },
    { url: gajano, title: "" },
    { url: kandinsky, title: "" },
    { url: cosa, title: "" },
    { url: leiris, title: "" },
    { url: sacro, title: "" },
    { url: simboli, title: "" },
    { url: uomo, title: "" },
  ];

  return (
    <div className="container my-4">
      <h5>Some of Book's inspirators</h5>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-sm-4 col-md-3 col-lg-2 mb-3">
            <div className="card">
              <img
                className="card-img-top"
                src={image.url}
                title={image.title}
              />
              <div className="card-body">
                <h6 className="card-title">{image.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inspiration;
