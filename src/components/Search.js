import React from 'react';

import './Search.scss';

function Search(props) {
    const {search, searchChange, searchText} = props;
    return (
        <form className={'search'} onSubmit={event => search(event)}>
            <label>
                <input
                    type={'text'}
                    value={searchText}
                    className={'search__input'}
                    onChange={event=> searchChange(event)}
                    placeholder={'...search'}
                />
            </label>
            <input type={'submit'} value={'Search'} className={'search__submit'} />
        </form>
    )
}

export default Search;