import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {testVenue} from "./testData";

describe('App', () => {
    const app = shallow(<App/>);
    app.setState({
        venues: [testVenue],
        searchText: '',
        selectedVenue: testVenue
    });

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('renders VenueList component', () => {
        expect(app.find('VenueList').exists()).toBe(true);
    });

    it('renders Search component', () => {
        expect(app.find('Search').exists()).toBe(true);
    });

    it('renders VenueDetails component', () => {
        expect(app.find('VenueDetails').exists()).toBe(true);
    });

    it('updates state with search string', () => {
        const searchText = 'Some Text';
        const mockEvent = {target: {value: searchText}};
        app.instance().searchChange(mockEvent);
        expect(app.state().searchText).toEqual(searchText);
    });

    it('updates state when selecting a venue', () => {
        app.setState({
            venues: [testVenue],
            searchText: '',
            selectedVenue: {}
        });
        app.instance().selectVenue(testVenue.id);
        expect(app.state().selectedVenue).toEqual(testVenue);
    });
});
