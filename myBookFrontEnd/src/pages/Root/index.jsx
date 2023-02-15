import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import NavDown from "./NavDown";

export default function Root(){
    return(
        <>
        <Nav/>
        <div style={{ marginTop: "110px", minHeight: "80vh" }}>
        <Outlet/>
        </div>
        <NavDown/>

        </>
    ) 
}