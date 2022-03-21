import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  message: null
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      if (action.payload.message) {
        state.type = action.payload.type;
        state.message = `${action.payload.type.toUpperCase()}: ${action.payload.message}`;
      }
    }
  }
});

export const { setAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
