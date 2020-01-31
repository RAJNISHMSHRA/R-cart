import React, {useState, useEffect} from 'react';
import Dropdown from './dropdown';

const Search = props => {
  const [searchItems, setsearchItems] = useState ({
    searchValue: '',
  });
  const searchProduct = e => {
    let {value} = e.target;
    setsearchItems ({
      ...searchItems,
      searchValue: value,
    });
  };

  useEffect (
    () => {
      console.log (searchItems.searchValue);
      props.searchItem (searchItems.searchValue);
    },
    [searchItems.searchValue]
  );

  return (
    <React.Fragment>

      {/* <input
        type="search"
        className="form-control shadow-none item-search useFontAwesomeFamily"
        value={searchItems.searchValue}
        placeholder=" Search "
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = 'Search')}
        onChange={e => searchProduct (e)}
      /> */}
      <div className="input-group search-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search" />
          </span>
        </div>
        <input
          type="text"
          className="form-control shadow-none item-search useFontAwesomeFamily shadow-drop-center"
          type="search"
          value={searchItems.searchValue}
          placeholder=" Search "
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'Search')}
          onChange={e => searchProduct (e)}
        />
      </div>

    </React.Fragment>
  );
};
export default Search;
