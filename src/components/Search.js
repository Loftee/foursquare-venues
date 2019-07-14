import React from 'react';

import './Search.scss';

function Search(props) {
    const {search, searchChange, searchText} = props;
    return (
        <div className={'search'}>
            <label>
                <input type={'text'} value={searchText} className={'search__input'} onChange={event=> searchChange(event)} />
            </label>
            <input type={'button'} value={'Search'} className={'search__submit'} onClick={() => search()} />
        </div>
    )
}

export default Search;