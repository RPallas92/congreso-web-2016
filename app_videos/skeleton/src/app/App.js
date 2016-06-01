import React, { Component } from 'react';
import Either from 'data.either';

import { Empty, searchVideos } from './domain/model';
import VideoSearch from './views/VideoSearch';
import styles from './styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: Empty
    };
  }

  searchVideos(term) {
    searchVideos(term).fork((e) => this.showError(e), this.updateResults.bind(this));
  }

  showError(err) {
    console.error(err);
  }

  updateResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <VideoSearch onSearch={this.searchVideos.bind(this)} results={this.state.results}/>
    );
  }
}

export default App;

