import React from 'react';

const VideoDetail = ({ video }) => {
  // no video selected yet, so video === null
  if (!video) {
      return <div>Loading...</div>
  }

  return (
    <div>
      {video.snippet.title}
    </div>
  );
}

export default VideoDetail;
