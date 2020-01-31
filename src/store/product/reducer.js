const initialState = {
  Products: [],

};

const reducer = (state = initialState, action) => {
  

  if (action.type === 'SET_PRODUCT') {
    return {
      Products:action.products ,
    };
  }
  return state;
};

export default reducer;
