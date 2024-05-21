import { createStore, combineReducers } from 'redux';
import { cartReducer, productReducer } from './reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(rootReducer);

export default store;
