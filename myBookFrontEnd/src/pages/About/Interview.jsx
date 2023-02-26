import React from "react";
import VideoYoutube from "../../video/VideoYoutube";
import backgroundImage from "../../images/sfondoYoutube.jpg";

function Interview() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "170vh",
        }}
      >
        <div style={{ marginLeft: "30%", marginTop: "10%" }}>
          <VideoYoutube videoId="k_ABS8_TjAc" />
        </div>

        <VideoYoutube videoId="J0J3tEjIoLk" />
        <VideoYoutube videoId="ZwvInMDZc84" />
      </div>
    </>
  );
}

export default Interview;
