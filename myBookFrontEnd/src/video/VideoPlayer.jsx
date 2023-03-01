import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video controls>
        <source src="../../videoPc/Roma_Nuvola.mp4" type="video/mp4" />
        <p>Roma </p>
      </video>
    </div>
  );
};

export default VideoPlayer;
