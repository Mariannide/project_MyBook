import fotolibro from "../../images/fotolibro.jpeg";
import "./book.module.css";

export default function Book() {
  return (
    <>
      <header>
        <h1>ALDO MELILLO: Le opere di un artista irpino</h1>
        <br />
        <h3>“Nothing is ever completely finished.” -Leiris, 1939</h3>
        <h4>
          With this concept, he wanted to highlight how man's creative activity
          was constantly moving; it is this very concept that has guided my
          book.
        </h4>

        <div className="container">
          <p className="par">
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

        <button type="button" className="btn btn-danger">
          Back
        </button>
      </header>
    </>
  );
}

