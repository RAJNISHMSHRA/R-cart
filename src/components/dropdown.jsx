import React from 'react';

const Dropdown = () => {
  return (
    <React.Fragment>
      <div>
        <label htmlFor="price" >Sort by Price :</label>
        <div className="dropdown select-price ml-3" id="price">

          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            {' '}
            Select{' '}
          </button>

          <div className="dropdown-menu">
            <p>low to high</p>
            <p>high to low</p>
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
