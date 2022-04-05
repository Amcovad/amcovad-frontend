import { createSlice, current } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: { value: [{ id: 1, name: 'Apple Laptop', favourite: false, price: '125000' }] },
  reducers: {
    addProduct: (state, action) => {
      state.value.push({
        id: state.value.length + 1,
        ...action.payload
      });
    },

    editProduct: (state, action) => {
      const { id } = action.payload;
      const productExists = state.value.filter((product) => product.id === id);
      if (productExists) {
        console.log(current(state.value));
        state.value.map((product) => {
          product.name = action.payload.name;
          product.price = action.payload.price;
        });
      }
    },

    updateProducts: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          product.name = action.payload.name;
          product.price = action.payload.price;
        }
      });
    },
    updateProduct: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...action.payload
          };
        }
      });
    },

    deleteProduct: (state, action) => {
      state.value = state.value.filter((product) => product.id !== action.payload.id);
    },

    resetCart(state) {
      state.value = [];
    }
  }
});

export const { addProduct, editProduct, deleteProduct, resetCart, updateProduct } = productSlice.actions;
export const productData = (state) => state.product.value;

export default productSlice.reducer;
