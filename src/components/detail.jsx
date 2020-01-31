import React, {useState, useEffect} from 'react';
import spinner from '../images/loadingtext.gif';
import {setCartItemCount} from './utilities';

const Detail = props => {
  const {product, setItem} = props;
  const {picture, description, price, title, stock} = product;

  const [diplayState, setDisplayState] = useState ({
    isLoading: true,
  });
  const addCart = item => {
    setItem (product, 'p');
  };
  useEffect (
    () => {
      if (props.product.picture !== undefined) {
        setDisplayState ({
          isLoading: false,
        });
      }
    },
    [picture]
  );

  return diplayState.isLoading == true
    ? <div style={{height: '100vh'}}>
        <img
          src={spinner}
          width="90px"
          style={{marginTop: '6rem'}}
          alt="spinner loader"
        />
      </div>
    : <React.Fragment>

        <div className="detail_outer">
          <div className="product_detailContainer_left">
            <div>
              <img src={`data:image/jpeg;base64,${picture}`} width="200px" />
            </div>
          </div>
          <div className="product_detailContainer_right ">
            <h2 className="detail-title">{title}</h2>
            <div className="detail_description">
              <p className="wishlist_description">{description}</p>
            </div>
            <div className="">
              <h4><i class="fas fa-rupee-sign" />{price}</h4>
              <span><p>Hurry Up ,{stock} items Left</p></span>
            </div>
            <div className="wishlist_btn_outer d-flex  justify-content-around mt-3 ">
              <button
                type="btn"
                className="btn btn-primary addCart justify-content-between"
                onClick={addCart.bind (this, props.product)}
              >
                Add to cart
              </button>
              <button type="btn" className="btn btn-warning wishlist">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>;
};
export default Detail;
