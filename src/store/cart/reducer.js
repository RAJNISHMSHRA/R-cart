const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {

  
  switch (action.type) {
    case "SET_CARTITEMS":
      return {
        ...state,
        cartItems: action.item,
      };
      
  }

  return state;
};
export default reducer
