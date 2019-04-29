import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => {
    return <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
    />
  })

  return (
    <div className="ui relaxed divided list">
      {videoList}
    </div>
  );
}

export default VideoList;
