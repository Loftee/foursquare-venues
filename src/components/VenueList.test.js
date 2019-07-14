import React from 'react';
import {shallow} from 'enzyme';
import VenueList from './VenueList';

describe('VenueList component', () => {
    const props = {
        venues: [{
            "id": "4c3d6ed94bc9a5939b07d471",
            "name": "Costa Coffee",
            "location": {
                "address": "4 Great Portland St",
                "lat": 51.51573111967288,
                "lng": -0.14068655684295295,
                "labeledLatLngs": [{"label": "display", "lat": 51.51573111967288, "lng": -0.14068655684295295}],
                "distance": 42,
                "postalCode": "W1W 8QJ",
                "cc": "GB",
                "city": "London",
                "state": "Greater London",
                "country": "United Kingdom",
                "formattedAddress": ["4 Great Portland St", "London", "Greater London", "W1W 8QJ", "United Kingdom"]
            }
        }]
    };
    const component = shallow(<VenueList {...props} />);
    it('displays a list of venues', () => {
        expect(component.find('.venue-list__item').length).toEqual(1);
    });
});