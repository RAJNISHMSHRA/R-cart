import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './style/style.scss';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/js/src/collapse';
import '../node_modules/bootstrap/js/dist/dropdown';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import prod_reducer from './store/product/reducer'
import brand_reducer from './store/brand/reducer'
import cartReducer from './store/cart/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const totalReducer = combineReducers({
      prod: prod_reducer,
      brand:brand_reducer,
      cartReducer:cartReducer
})
const store = createStore (totalReducer,applyMiddleware(thunk));

ReactDOM.render (
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById ('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
