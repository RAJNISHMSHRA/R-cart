import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/nav-icon-bag.svg';
import StripeCheckout from 'react-stripe-checkout';

const Navbar = ({count}) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark bgcolor">
        <Link
          to="/"
          className="navbar-brand logo d-flex align-items-center"
          href="#"
        >
          <img src={logo} alt="bag" />R Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="nav-item">

              <Link to="/brands" className="nav-link">
                Brands
              </Link>
            </li>
            <Link to="/cart">

              <button type="btn" className="btn nav-cart">
                <i className="fas fa-shopping-cart" />
                <span className="badge car_Count badge-secondary">
                  {count ? count : 0}
                </span>
                <span style={{marginLeft: '6px'}}>cart</span>
                <br />
                <div className="caption" />

              </button>
            </Link>
          </ul>
        </div>

      </nav>
    </React.Fragment>
  );
};
export default Navbar;
