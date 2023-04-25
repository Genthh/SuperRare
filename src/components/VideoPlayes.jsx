import React from 'react'
import gatesVideo from './assets/gates3.mp4'
import { useRef } from 'react';
import './VideoPlayer.css'

const VideoPlayes = ({setShowVideo}) => {
  const videoRef = useRef(null);
  

  function handleVideoEnd() {
    videoRef.current.pause();
    setShowVideo(false);
  }

  return (
    <div class="video-container">
          <video
          class="background-video"
      ref={videoRef}
      muted
      autoPlay
      onEnded={handleVideoEnd}
    >
      <source src={gatesVideo} type="video/mp4" />
    </video>
    <div class="text-container">
    <h1 class="text">SuperRare</h1>
  </div>
    </div>
  );
}

export default VideoPlayes

