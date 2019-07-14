import React, {Component} from 'react';
import {fetchVenues} from './services/services';
import VenueList from './components/VenueList';
import Search from './components/Search';
import VenueDetails from './components/VenueDetails';
import * as constants from './constants';

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            venues: [],
            searchText: '',
            selectedVenue: {}
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
                const venueList = res ? res : [];
                this.setState(prevState => ({
                    ...prevState,
                    venues: venueList
                }));
            });
    };

    selectVenue = id => {
        const venue = this.state.venues.filter(venue => venue.id === id);
        this.setState(prevState => ({
            ...prevState,
            selectedVenue: venue[0]
        }));
    };

    render() {
        return (
            <div className="app">
                <h1>Search for locations near Oxford Circus</h1>
                <Search searchText={this.state.searchText} searchChange={this.searchChange} search={this.search}/>
                {this.state.venues.length > 0 &&
                <VenueList {...this.state} selectVenue={this.selectVenue}/>
                }
                {this.state.selectedVenue.name &&
                <VenueDetails selectedVenue={this.state.selectedVenue}/>
                }
            </div>
        );
    }
}

export default App;
