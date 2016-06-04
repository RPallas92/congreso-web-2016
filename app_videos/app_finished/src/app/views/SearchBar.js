import React from 'react';
import styles from '../styles/styles';

const SearchBar = ({onSearch}) => (
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        placeholder="Search for videos"
        autoFocus={true}
        onChange={ ({ target: t }) => onSearch(t.value) }/>
    </div>
);

export default SearchBar;
