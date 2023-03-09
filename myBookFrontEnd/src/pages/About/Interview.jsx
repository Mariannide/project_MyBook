import React from "react";
import { Link } from "react-router-dom";
import VideoYoutube from "../../video/VideoYoutube";
import backgroundImage from "../../images/sfondoYoutube.jpg";
import Roma_Nuvola from "../../videoPc/Roma_Nuvola.mp4";

function Interview() {
  return (
    <>
      <div
        className=" container-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "170vh",
        }}
      >
        <div>
          <div>
            <video
              src={Roma_Nuvola}
              controls
              style={{ width: "30%", padding: "1%" }}
            />
          </div>
          <div style={{ marginLeft: "40%", padding: "1%" }}>
            <VideoYoutube videoId="k_ABS8_TjAc" />
          </div>
          <div style={{ marginRight: "60%", padding: "4%" }}>
            <VideoYoutube videoId="J0J3tEjIoLk" />
          </div>
          <div style={{ marginLeft: "40%", padding: "1%" }}>
            <VideoYoutube videoId="ZwvInMDZc84" />
          </div>
        </div>
        <div>
        <Link
          to={"/"}
          className="btn btn-success col-1"
          style={{ marginBottom: "6%" }}
        >
          Back
        </Link>
        </div>
      </div>
    </>
  );
}

export default Interview;
