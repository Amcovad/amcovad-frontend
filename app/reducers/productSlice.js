import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: { isFavourite: [], value: [{ id: 1, name: 'Apple Laptop', favourite: false, price: '125000' }] },
  reducers: {
    addProduct: (state, action) => {
      state.value.push({
        id: state.value.length + 1,
        ...action.payload
      });
    },
    // editProduct: (state, action) => {
    //   state.value.map((product) => {
    //     if (product.id === action.payload.id) {
    //       return {
    //         ...state,
    //         ...action.payload
    //       };
    //     }
    //   });
    // },
    editProduct: (state, action) => {
      const { id } = action.payload;
      state.value.map((product) => {
        if (product.id === id) {
          product.name = action.payload.name;
          product.price = action.payload.price;
          product.favourite = action.payload.favourite;
        }
      });
    },

    markFavourite: (state, action) => {
      state.value.map((product) => {
        if (product.favourite === false) {
          state.isFavourite = false;
        }
      });
    },

    logout: (state) => {
      state.isAuthenticated = false;
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter((product) => product.id !== action.payload.id);
    },

    resetCart(state) {
      state.value = [];
    }
  }
});

export const { addProduct, editProduct, deleteProduct, markFavourite, resetCart } = productSlice.actions;
export const productData = (state) => state.product.value;

export default productSlice.reducer;
