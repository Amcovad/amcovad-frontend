import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import quoteReducer from '../reducers/quoteSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quote: quoteReducer
  }
});
