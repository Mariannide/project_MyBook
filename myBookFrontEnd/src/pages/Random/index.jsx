import { Link } from "react-router-dom"

export default function Random(){
    return(
        <>
        <p style={{marginTop: "500px"}}>Ciao</p>
        
        <Link to={"/home"} className="btn btn-danger">
          Back 
        </Link> 
        </>


    )
}