import React from 'react';

import './VenueList.scss';

function VenueList(props) {
    const {venues, selectVenue} = props;
    return (
        <div className={'venue-list__wrapper'}>
            <h2>Venue List</h2>
            <ul className={'venue-list'}>
                {
                    venues.map(venue => {
                        return (
                            <li key={venue.id} className={'venue-list__item'} onClick={() => {
                                selectVenue(venue.id)
                            }}>
                                <h3>{venue.name}</h3>
                                <p>{venue.location.distance} meters away</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default VenueList;