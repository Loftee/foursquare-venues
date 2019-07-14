import React from 'react';
import {shallow} from 'enzyme';
import VenueList from './VenueList';
import {testVenue} from "../testData";

describe('VenueList component', () => {
    it('renders correctly', () => {
        const props = {venues: [testVenue]};
        const component = shallow(<VenueList {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('displays a list of venues', () => {
        const props = {venues: [testVenue]};
        const component = shallow(<VenueList {...props} />);
        expect(component.find('.venue-list__item').length).toEqual(1);
    });

    it('calls function when venue is selected', () => {
        const props = {venues: [testVenue]};
        const mockSelectVenue = jest.fn();
        const component = shallow(<VenueList {...props} selectVenue={mockSelectVenue}/>);
        component.find('.venue-list__item').simulate('click');
        expect(mockSelectVenue).toHaveBeenCalledWith(testVenue.id);
    });
});