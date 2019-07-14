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

    it('triggers function on search text input', () => {
        const mockSearchChange = jest.fn();
        const searchEvent = {target: { value: 'Some Text'}};
        const component = shallow(<Search searchChange={mockSearchChange} />);
        component.find('.search__input').simulate('change', searchEvent);
        expect(mockSearchChange).toHaveBeenCalledWith(searchEvent);
    });

    it('triggers function on search button click', () => {
        const mockSearch = jest.fn();
        const component = shallow(<Search search={mockSearch} />);
        component.find('.search').simulate('submit');
        expect(mockSearch).toHaveBeenCalled();
    });
});