import React, { Component } from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import Search from '../search';
import Dropdown from '../dropdown';


export const skeleton = (
  <div>
    <div className="search-outer d-flex justify-content-between">
    <SkeletonTheme color="white"  className="left-bar">
      <Skeleton width={240} height={20}  />
      </SkeletonTheme>
 
    <SkeletonTheme color="white" className="left-bar">
      <Skeleton width={440} height={30}  />
      
      </SkeletonTheme>
    </div>
    <div className="container-fluid top-display main">
      <hr />
      <div className="left-bar">
        <div className="left-menu">
          <SkeletonTheme color="white" className="left-bar">
            <Skeleton width={240} count={3} />

          </SkeletonTheme>
        </div>
      </div>

      <div className="right-content row">
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="" />

              </div>
              <Skeleton width={260} count={2} className="" />
            </div>

          </div>

        </div>
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="" />
              </div>
              <Skeleton width={260} count={2} className="" />
            </div>
          </div>
        </div>
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="" />
              </div>
              <Skeleton width={260} count={2} className="" />
            </div>
          </div>
        </div>
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="" />
              </div>
              <Skeleton width={260} count={2} className="" />
            </div>
          </div>
        </div>
        <div className="product-outer col-md-4 col-6">
          <div className=" cart-item-outer">
            <div className="cart-item d-flex flex-column">
              <div className="cart-image d-flex align-items-center justify-content-center product-image">
                <Skeleton width={270} height={224} className="prod" />
              </div>
              <Skeleton width={260} count={2} className="" />
            </div>
          </div>
        </div>
        <Skeleton />
      </div>
    </div>
  </div>
);
