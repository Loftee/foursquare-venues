import React, {Component} from 'react';
import {fetchVenues} from './services/services';
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
        <div className="App">

        </div>
    );
  }
}

export default App;
