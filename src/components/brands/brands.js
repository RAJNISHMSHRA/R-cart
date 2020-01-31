import React, {useState, useEffect} from 'react';
import {removeDuplicate} from '../utilities';
import Skeleton from 'react-loading-skeleton';
var titles;

const Brands = ({brands: brand, checked, onchecked, brandFilter, getBrand}) => {
  // titles = brand.map (item => {
  //   return item.title;
  // });
debugger
  // const title = removeDuplicate (titles);
  const [checkedProduct, setcheckedProduct] = useState ({
    samsung: '',
    apple: '',
    google: '',
    blackberry: '',
    redmi: '',
  });
  useEffect (
    () => {
    
      if (brandFilter) brandFilter (checkedProduct);
    },
    [checkedProduct]
  );

  const oncheckedhandler = e => {
    debugger;

    getBrand (e);

 

    // if (checked) {
    //   setcheckedProduct ({
    //     ...checkedProduct,
    //     [id]: id,

    //   });
    // } else if (!checked) {
    //   setcheckedProduct ({
    //     // samsung: '',
    //     // apple: '',
    //     // google: '',
    //     // blackberry: '',
    //     // redmi: '',
    //     ...checkedProduct,
    //     [id]: '',
    //     brand_id:''
    //   });
    // }

    // onchecked (e);
  };
  let brandsCheckbox = '';
  brandsCheckbox = brand.map (title => {
   
    return (
      <div
        className="d-flex flex-row align-items-center mb-2"
        key={`${title.brand_id}`}
      >
        <input
          type="checkbox"
          checked={checked}
          id={`${title.title}`}
          onClick={oncheckedhandler}
          data-brand_id={`${title.brand_id}`}
        />
        <label
          htmlFor={`${title.title}`}
          style={{marginLeft: '10px', marginBottom: '0px'}}
        >
          {title.title}
        </label>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="brands">
        <span className="brand-title"> Brand </span>
        <ul className="price-ul">
          {brandsCheckbox || <Skeleton count={2}/>}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Brands;
{
  /* <div className="brands">
<span className="brand-title"> Brand </span>
<ul className="price-ul">
  <div className="d-flex flex-row">
    <input
      type="checkbox"
      checked={checked}
      id="samsung"
      onClick={oncheckedhandler}
    />
    <label htmlFor="samsung" style={{marginLeft: '10px'}}>
      {brand.title}
    </label>
  </div>
  <div className="d-flex flex-row">
    {' '}
    <input
      type="checkbox"
      checked={checked}
      id="apple"
      onClick={oncheckedhandler}
    />

    {' '}
    <label htmlFor="apple" style={{marginLeft: '10px'}}>Apple</label>

  </div>
  <div className="d-flex flex-row">
    {' '}
    <input
      type="checkbox"
      checked={checked}
      id="google"
      onClick={oncheckedhandler}
    />
    {' '}
    <label htmlFor="google" style={{marginLeft: '10px'}}>Google</label>

  </div>
  <div className="d-flex flex-row">
    {' '}
    <input
      type="checkbox"
      checked={checked}
      id="blackberry"
      onClick={oncheckedhandler}
    />
    {' '}
    <label htmlFor="blackberry" style={{marginLeft: '10px'}}>
      Blackberry
    </label>

  </div>
  <div className="d-flex flex-row">
    {' '}
    <input
      type="checkbox"
      checked={checked}
      id="redmi"
      onClick={oncheckedhandler}
    />
    {' '}
    <label htmlFor="redmi" style={{marginLeft: '10px'}}>Redmi</label>
  </div>
</ul>
</div> */
}
