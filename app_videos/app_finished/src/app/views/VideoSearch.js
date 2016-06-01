import React from 'react';
import SearchResults from './SearchResults';
import Embed from './Embed';
import styles from '../styles/styles';

const VideoSearch = ({ onSearch, results }) => (
  <div style={styles.container}>
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        placeholder="Search for videos"
        autoFocus={true}
        onChange={ ({ target: t }) => onSearch(t.value) }/>
    </div>
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
