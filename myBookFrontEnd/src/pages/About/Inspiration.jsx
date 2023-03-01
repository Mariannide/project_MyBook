import React from "react";
import { Link } from "react-router-dom";
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
    { url: modernità, title: "Modernità Liquida" },
    { url: qualco, title: "Qualcosa" },
    { url: otto, title: "Il Sacro" },
    { url: art, title: "Antropologia dell'arte" },
    { url: butler, title: "Questione di genere" },
    { url: dizionario, title: "Dizionario di antropologia" },
    { url: dono, title: "Saggio sul dono" },
    { url: durand, title: "Le strutture antropologiche dell'immaginario" },
    { url: durkeim, title: "Le forme elementari della vita religiosa" },
    { url: filosofia, title: "Prendila con filosofia" },
    { url: freud, title: "Freud-Opere complete" },
    { url: gajano, title: "La santità" },
    { url: kandinsky, title: "Du spirituel dans l'art" },
    { url: cosa, title: "La cosa bella di avere una brutta giornata" },
    { url: leiris, title: "L'age d'homme" },
    { url: sacro, title: "Il sacro e il profano" },
    { url: simboli, title: "Dizionario dei simboli" },
    { url: uomo, title: "L'uomo in cerca di senso" },
  ];

  return (
    <>
    <div className="container my-4">
      <h4 style={{fontFamily:"Baskerville", fontWeight:"bold", padding:"2%", fontSize:"7vh"}}>Some inspiring books</h4>
<br/>
      <div className="row" style={{}}>
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
    <Link to={"/"} className="btn btn-success col-1" style={{marginTop:"3%"}}>
    Back
  </Link>
  </>
  );
}

export default Inspiration;
