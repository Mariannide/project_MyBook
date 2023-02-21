import "./bio.modules.css";
import fotoprofilo from "../../images/fotoprofilo.jpg";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <>
        <div className="container d-flex justify-content-between">
    

    <img src={fotoprofilo} alt="image"/>

      <p className="col-6" style={{lineHeight: "2"}}>
        Marianna Laudisi is originally from Montefalcione (AV) but currently
        lives in Sevilla. Born in 1990, she has a degree in Education
        Sciences and Anthropology and Ethnology from the "Alma Mater Studiorum"
        University of Bologna. She completed an international master's degree in
        Anthropology in Seville. An tireless traveler and citizen of the world,
        she has a strong sensitivity to contemporary social issues. She has
        always supported the requests for self-determination from various social
        groups that are unfortunately often condemned to marginalization. She
        volunteers and activist in various fields: feminism, immigration, disability, and
        LGBTQ+ issues. This is her first book.
      </p>
      </div> 
      <Link to={"/home"} className="btn btn-danger">
          Back 
        </Link>     
    </>
  );
}
