import React from 'react'

const Video = () => {
  return (
      <div className="h-full w-full">
        <video 
          className="w-full h-full object-cover"
          src="/video/83c745cf.mp4" 
          autoPlay
          muted 
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
  )
}

export default Video
