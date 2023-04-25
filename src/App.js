import React, { useState } from 'react';
import LandingPage from './components/LandingPgae'
import VideoPlayes from './components/VideoPlayes'

function App() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div>
      <div>
         { showVideo && <VideoPlayes 
      setShowVideo={setShowVideo}
      /> }
      { !showVideo && <LandingPage /> }
      </div>
     
    </div>
  );
}

export default App;
