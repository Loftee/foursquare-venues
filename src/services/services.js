import * as constants from '../constants';

export const fetchVenues = (api) => {
    const fetchAPI = api || constants.VENUE_API;
    return fetch(fetchAPI)
        .then(handleErrors)
        .then(res => res.json())
        .then(jsonData => {
            return jsonData.response.venues.map(venue => ({
                id: venue.id,
                name: venue.name,
                location: venue.location
            }));
        })
        .catch(error => console.log(error));
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}