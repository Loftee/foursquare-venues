import React from 'react';
import {shallow} from 'enzyme';
import Search from './Search';

describe('Search component', () => {
    it('input updates state', () => {
        const mockSearch = jest.fn();
        const component = shallow(<Search search={mockSearch} />);
        component.find('.search').simulate('submit');
        expect(mockSearch).toHaveBeenCalled();
    });

    it('triggers function on search button click', () => {
        const mockSearch = jest.fn();
        const component = shallow(<Search search={mockSearch} />);
        component.find('.search').simulate('submit');
        expect(mockSearch).toHaveBeenCalled();
    });
});