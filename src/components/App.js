import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items });

    console.log(this.state.videos);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        {this.state.videos.length} Videos
      </div>
    );
  }
}

export default App;
