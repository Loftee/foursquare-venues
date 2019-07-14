import * as constants from '../constants';

export const fetchVenues = (url) => {
    const fetchUrl = url ? url : constants.VENUE_API;
    return fetch(fetchUrl)
        .then(handleErrors)
        .then(res => res.json())
        .then(jsonData => {
            return jsonData.response.venues.map(venue => ({
                id: venue.id,
                name: venue.name,
                location: {
                    formattedAddress: venue.location.formattedAddress,
                    distance: venue.location.distance
                }
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