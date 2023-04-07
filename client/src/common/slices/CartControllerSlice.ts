import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import type { CartProduct } from '../types/Types';

type CartDetails = {
  open: boolean;
  cartProducts: CartProduct[];
}

const initialState: CartDetails = {
  open: false,
  cartProducts: []
};

export const cartControllerSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartActivity: (state, action) => {
      state.open = action.payload;
    },
    addCartProduct: (state, action: PayloadAction<CartProduct>) => {
      const index = state.cartProducts.findIndex((cp: CartProduct) => cp.product.productId === action.payload.product.productId);
      if (index < 0) {
        state.cartProducts.push({
          ...action.payload,
          salesQuantity: 1
        });
      }
      else
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.cartProducts[index].salesQuantity! += 1;
    },
    removeCartProduct: (state, action: PayloadAction<CartProduct>) => {
      const index = state.cartProducts.findIndex((cp: CartProduct) => cp.product.productId === action.payload.product.productId);
      if (index >= 0) {
        const quantity = state.cartProducts[index].salesQuantity;
        if (quantity == 1)
          state.cartProducts.splice(index, 1);
        else
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          state.cartProducts[index].salesQuantity! -= 1;
      }
    },
    clearCart(state) {
      state.cartProducts = [];
    }
  }
});

export const {
  setCartActivity,
  addCartProduct,
  removeCartProduct,
  clearCart
} = cartControllerSlice.actions;
export const cartDetails = (state: RootState) => state.cartController as CartDetails;
export default cartControllerSlice.reducer;