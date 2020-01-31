import React, {useState, useEffect} from 'react';
import star from '../../images/star.svg';
import buy from '../../images/button-buy-bag.svg';
import like from '../../images/like-buuton-cart.svg';
import {Link} from 'react-router-dom';
import {setCartItemCount} from '../utilities';
import Skeleton from 'react-loading-skeleton';

const Products = props => {
  const [cartState, setCartState] = useState ({
    cartItems: 0,
    btnclicked: true,
  });

  var items;
  items = props.products;

  const addToCartItems = (item, e) => {
    debugger;
    e.target.innerHTML = `<i class="fas fa-shopping-cart mr-3"></i>           IN CART`;
    e.target.style.backgroundColor = 'green';
    e.target.style.Color = 'black';
    props.cartItemsCounts (item, 'p');
  };
  const showclickedProduct = e => {
    const {id} = e.target;
    localStorage.setItem ('product_Id', id);
    const pageNav = 'products';

    props.getProduct_id (id);
  };
  const productItems = items.map (product => {
    return (
      <div key={product.product_id} className="product-outer col-md-4 col-6">
      
        <div className=" cart-item-outer">
          <div className="cart-item d-flex flex-column">
            <div className="cart-image d-flex align-items-center justify-content-center product-image">
              <Link to={`/details/${product.product_id}`}>
                <img
                  src={`data:image/jpeg;base64,${product.picture}`}
                  alt="img"
                  onClick={showclickedProduct}
                  id={`${product.product_id}`}
                />
              </Link>
            </div>
            <div className="star">
              <div className="star-img">
                <span>4.5 <img src={star} alt="" className="" /></span>
              </div>
              <div className="cost">
                <span>
                  {' '}<i className="fas fa-rupee-sign" /> {product.price}
                </span>
                <div className="d" />
              </div>

            </div>
            <div className="item-info">
              <p className="text-bold">{product.title}</p>
              {/* <p>{product.description}</p> */}
            </div>
            <div className="cart-buttons d-flex flex-row">

              <button
                className="btn d-flex align-items-center justify-content-center"
                type="button"
              >

                {' '}
                {/* <img src={like} alt="like" /> */}
                <i className="far fa-heart" />
                {' '}
                <span>Wishlist</span>
                {' '}
              </button>

              <button
                className="btn d-flex align-items-center shadow-none justify-content-center add-cart jello-horizontal"
                type="button"
                onClick={addToCartItems.bind (this, product)}
                data-product={JSON.stringify (product)}
              >

                <img src={buy} alt="" />

                ADD TO CART
              </button>

            </div>
          </div>

        </div>
      </div>
    );
  });

  return (
    <React.Fragment>

      <div className="container-fluid product-container">
        <div className="row right-content-items">

          {productItems || <Skeleton count={6} />}
        </div>
      </div>

    </React.Fragment>
  );
};

export default Products;
