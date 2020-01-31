import {combineReducers} from 'redux';
import cartreducer from './cart/reducer'

export default combineReducers ({cartreducer});

// const initialState = {
//     Products: [],
//     brands: [],
//     isLoading: true,
//     pageNo: 1,
//     CBrand_id: [],
//     CartItems: [],
//     cartItemsCount: 0,
// }

// const reducers = (state=initialState,action) =>{

//     if(action.type === 'CHANGE_ISLOADING'){
//         return{
//             isLoading: !state.isLoading
//         }
//     }
// return (state)

// }
// export default reducers
