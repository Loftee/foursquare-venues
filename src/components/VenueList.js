import React, {Component} from 'react';

import './VenueList.scss';

class VenueList extends Component {
    render() {
        const {venues} = this.props;
        return (
            <div className={'venue-list__wrapper'}>
                <h2>Venue List</h2>
                <ul className={'venue-list'}>
                    {
                        venues.map(venue => {
                            return (
                                <li key={venue.id} className={'venue-list__item'}>
                                    <h3>{venue.name}</h3>
                                    <p>{venue.location.address}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default VenueList;