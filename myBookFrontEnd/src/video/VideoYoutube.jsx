import React from 'react';

function VideoYoutube(props) {
  return (
    <div>
      <iframe 
        width="400" 
        height="250" 
        src={`https://www.youtube.com/embed/${props.videoId}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      >
      </iframe>
    </div>
  );
}

export default VideoYoutube;

