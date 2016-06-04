import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

import Embed from './Embed';
import styles from '../styles/styles';

const VideoSearch = ({ onSearch, results }) => (
  <div style={styles.container}>
    <SearchBar onSearch={onSearch}/>
    {
      results.cata({
        Right: (videos) => {
          return <SearchResults videos={videos}/>
        },
        Left: (msg) => <div style={styles.fill}>{msg}</div>
      })
    }
  </div>
);

export default VideoSearch;
