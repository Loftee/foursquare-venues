import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
    it('renders correctly', () => {
        const app = shallow(<App />);
        expect(app).toMatchSnapshot();
    });

    it('renders VenueList component', () => {
        const app = shallow(<App />);
        expect(app.find('VenueList').exists()).toBe(true);
    });

    it('renders Search component', () => {
        const app = shallow(<App />);
        expect(app.find('Search').exists()).toBe(true);
    });
});
