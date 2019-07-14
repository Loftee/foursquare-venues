import React from 'react';
import {shallow} from 'enzyme';
import VenueDetails from './VenueDetails';
import {testVenue} from "../testData";

describe('Venue Details', ()=> {
   const component = shallow(<VenueDetails selectedVenue={testVenue} />);

   it('renders correctly', () => {
      expect(component).toMatchSnapshot();
   });

   it('displays correct venue information', () => {
      expect(component.find('.venue-details__title').text()).toEqual('Costa Coffee');
      expect(component.find('.venue-details__address').text()).toEqual("4 Great Portland St\nLondon\nGreater London\nW1W 8QJ\nUnited Kingdom");
   });
});