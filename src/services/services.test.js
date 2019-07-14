import {fetchVenues} from './services';
import {testVenue} from "../testData";

describe('services', () => {
    it('fetch flight data', () => {
        const mockResponse = [testVenue];
        fetch.mockResponseOnce(JSON.stringify({response: {venues: mockResponse}}));
        fetchVenues()
            .then(res => {
                expect(res).toEqual(mockResponse);
            })
            .catch(err => console.log(err));
    });
});