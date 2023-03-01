import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import NavDown from "./NavDown";



export default function Root() {
  return (
    <>
    
      <Nav />
      <div>
        <Outlet/>
      </div>
      <div>
      <NavDown />
      </div>
    </>
  );
}

