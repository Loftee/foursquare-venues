import React, {Component} from 'react';
import {fetchVenues} from './services/services';
import VenueList from './components/VenueList';
import Search from './components/Search';
import * as constants from './constants';

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            venues: [],
            searchText: ''
        }
    }

    searchChange = event => {
        const searchText = event.target.value;
        this.setState(prevState => ({
           ...prevState,
           searchText: searchText
        }));
    };

    search = () => {
        const searchQuery = constants.VENUE_API + '&query=' + this.state.searchText.toLowerCase().replace(' ', '+');
        fetchVenues(searchQuery)
            .then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    venues: res
                }));
            });
    };

    render() {
        return (
            <div className="app">
                <h1>Search for locations near Oxford Circus</h1>
                <Search searchText={this.state.searchText} searchChange={this.searchChange} search={this.search} />
                <VenueList {...this.state} />
            </div>
        );
    }
}

export default App;
