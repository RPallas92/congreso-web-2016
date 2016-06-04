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

    render() {
    }
}

export default App;

