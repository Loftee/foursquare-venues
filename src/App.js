import React, {Component} from 'react';
import {fetchVenues} from './services/services';
import VenueList from './components/VenueList';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    fetchVenues()
        .then(res => {
          this.setState(prevState => ({
            ...prevState,
            venues: res
          }));
        });
  }


  render() {
    return (
        <div className="app">
            <VenueList {...this.state} />
        </div>
    );
  }
}

export default App;
