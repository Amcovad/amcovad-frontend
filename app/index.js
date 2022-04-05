import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import quoteReducer from './reducers/quoteSlice';
import authReducer from './reducers/authSlice';
import productReducer from './reducers/productSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quote: quoteReducer,
    auth: authReducer,
    product: productReducer
  }
});
