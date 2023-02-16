import fotolibro from "../../images/fotolibro.jpeg";
import "./book.module.css";
import { data } from "../../data";
import { Link } from "react-router-dom";

export default function Book() {
  return data.map(book => (
    <>
      <header>
        <h1>ALDO MELILLO: Le opere di un artista irpino</h1>
        <br />
        <br />
        <h3>“Nothing is ever completely finished.” -Leiris, 1939</h3>
        <br />
        
        <h4>
          With this concept, he wanted to highlight how man's creative activity
          was constantly moving; it is this very concept that has guided my
          book.
        </h4>
        <br/>
        <br/>
        <div className="container d-flex justify-content-between">
          <p className="col-6" style={{lineHeight: "2"}}>
            In this work, I showcase the works of an Irpino artist; an artist
            known in Campania(South of Italy) but less so throughout the rest of
            Italy. The overall goal was to bring his name beyond regional
            borders. The artist is Aldo Melillo, and from a very young age, he
            had a artistic talent that later introduced him to the world of
            teaching. The artist studied at the Institute and at the Academy of
            Fine Arts in Naples, and later became a professor in the State
            Schools in the cities of Avellino, Paternopoli (AV), and in his home
            town, where he also held the role of vice-principal until his
            retirement in 1993-94. Since 1960, he has set up numerous
            exhibitions and participated in many shows and contests.
          </p>
          

          <img src={fotolibro} alt="image" />
        </div>
        <br/>
        <Link to={"/home"} className="btn btn-danger">
          Back 
        </Link>
      </header>
    </>
  )
  );
}

