import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import quoteReducer from './reducers/quoteSlice';
import authReducer from './reducers/authSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quote: quoteReducer,
    auth: authReducer
  }
});
