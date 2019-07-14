import React from 'react';
import {shallow} from 'enzyme';
import VenueList from './VenueList';
import {testVenue} from "../testData";

describe('VenueList component', () => {
    const props = { venues: [testVenue] };
    const component = shallow(<VenueList {...props} />);
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('displays a list of venues', () => {
        expect(component.find('.venue-list__item').length).toEqual(1);
    });
});