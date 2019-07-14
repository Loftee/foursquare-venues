import React from 'react';

import './VenueDetails.scss';

function VenueDetails(props) {
    const {selectedVenue} = props;
    return (
        <div className={'venue-details__wrapper'}>
            <h2>Venue Details</h2>
            <div className={'venue-details'}>
                <h2 className={'venue-details__title'}>{selectedVenue.name}</h2>
                <p className={'venue-details__address'}>
                    {
                        selectedVenue.location.formattedAddress.join('\n')
                    }
                </p>
            </div>
        </div>
    )
}

export default VenueDetails;