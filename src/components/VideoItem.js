import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  console.log(video);

  return (
    <div className="video-item item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoItem;
