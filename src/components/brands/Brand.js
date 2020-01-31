import React, {Component} from 'react';
import Brands from './brands';
import {getData} from '../utilities';

class Brand extends Component {
  constructor (props) {
    super (props);
    this.state = {
      samsung: false,
      apple: false,
      google: false,
      blackberry: false,
      redmi: false,
    };
  }
  handleChecked = e => {
    const {id, brand_id} = e.target;
    this.setState ({
      [id]: [...!this.state[id]],
    });
  };

  render () {
   
    return (
      <div className="left-bar">
        <div className="left-menu">
          <Brands
            checked={this.state.checked}
            onchecked={this.handleChecked}
            brandFilter={this.props.brandFilter}
            isLoading={this.props.isLoading}
            brands={this.props.brands}
            getBrand={this.props.getBrand}
          />
        </div>
      </div>
    );
  }
}

export default Brand;
