import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    currentUser: null,
    users: [
      { id: 1, name: 'Yuser', email: 'user1@gmail.com', password: '123456' },
      { id: 2, name: 'Haruna', email: 'haruna@gmail.com', password: '123456' }
    ],
    errors: ''
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.filter((user) => user.email === email && user.password === password);

      if (user.length > 0) {
        state.authenticated = true;
        state.currentUser = user[0];
      } else {
        state.authenticated = false;
        state.errors = 'Invalid Username and password';
      }
    },
    signout: (state) => {
      state.authenticated = false;
    }
  }
});

export const { login, signout } = authSlice.actions;

export default authSlice.reducer;
