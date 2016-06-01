import React from 'react';

import styles from '../styles/styles';
import Embed from './Embed';

const SearchResults = ({ videos }) => {
  if (videos.length === 0) {
    return <div style={styles.fill}>No videos found</div>;
  } else {
    return (
      <div style={styles.results}>
        {
          videos.map(v => (
            <div key={v.id} style={styles.video}>
              <Embed video={v}/>
            </div>
          ))
        }
      </div>
    );
  }
};

export default SearchResults;
