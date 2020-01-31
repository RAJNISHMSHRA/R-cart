import React from 'react';

export const PushProductinput = ({productList,onSubmitProduct,onchangeProduct:change}) => {
const submitForm=() =>{
onSubmitProduct()
}
    
  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <label htmlFor="brand_title">Brand Title :</label>
        <input
          type="text"
          id="brand_title"
          name="brand_title"
          onChange={this.change}
        />
        <label htmlFor="brand_id">Brand ID :</label>
        <input
          type="number"
          id="brand_id"
          name="brand_id"
          onChange={this.change}
        />
        <label htmlFor="picture">Pictures :</label>
        <input type="file" id="picture" name="picture" onChange={this.change} />

        <label htmlFor="title">Title :</label>
        <input type="text" id="title" name="title" onChange={this.change} />
        <label htmlFor="description">Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.change}
        />
        <label htmlFor="stock">Stock :</label>
        <input type="number" id="stock" name="stock" onChange={this.change} />
        <label htmlFor="price">Price :</label>
        <input type="number" id="price" name="price" onChange={this.change} />
        <button type="submit">Submit</button>
      </form>

    </React.Fragment>
  );
};
