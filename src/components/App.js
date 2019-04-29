import React from 'react';
import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items });
  }

  // define callback as arrow function to bind 'this'
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
