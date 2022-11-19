import React from 'react'

function Video() {
  return (
    <div>
      k
      <video
        autoplay
        style={{ maxWidth: '100%', width: '300px', margin: '0 auto' }}
      >
        <source src="/video/test.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
