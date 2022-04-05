import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: { value: [{ id: 1, text: 'Hello from Qoute' }] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, { id: state.value.length + 1, text: action.payload.quote }];
    },
    remove: (state, action) => {
      state.value = state.value.filter((quote) => quote.id === action.payload.id);
    }
  }
});

export const { add, remove } = quoteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.quote.value)`
export const selectQuote = (state) => state.quote.value;

export default quoteSlice.reducer;
