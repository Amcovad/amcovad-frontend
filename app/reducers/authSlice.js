import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  value: [
    { id: 1, email: 'info@amcovad.com', password: 123456 },
    { id: 2, email: 'admin@amcovad.com', password: 'abcdef' }
  ]
};

export const authSlice = createSlice({
  name: 'authlogin',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.value = [
        ...state.value,
        {
          id: state.value.length + 1,
          email: action.payload.authlogin,
          password: action.payload.authlogin
        }
      ];
    },
    logout: (state, action) => {
      state.value = state.value.filter((authlogin) => authlogin.id === action.payload.id);
    }
  }
});

export const { login, logout } = authSlice.actions;

export const defaultUser = (state) => state.authlogin;

export default authSlice.reducer;
