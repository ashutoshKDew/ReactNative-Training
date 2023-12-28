import {createSlice} from '@reduxjs/toolkit';
import {CartState, CartItem} from '../../../types/User';

const initialState: CartState = {
  items: [], // Initial state for cart items
  totalPrice: 0, // Initial total price of the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart(state, action) {
      console.log('action.payload ' + JSON.stringify(action.payload));
      if (state.items.length === 0) {
        state.items.push({dish: action.payload, quantity: 1});
        state.totalPrice += action.payload.price;
        return state;
      }
      const index = state.items.findIndex(
        item => item.dish.id === action.payload.id,
      );
      if (index != -1) {
        var item = state.items[index];
        state.items[index] = {...item, quantity: item.quantity + 1};
      } else {
        state.items.push({dish: action.payload, quantity: 1});
      }
      state.totalPrice += action.payload.price;
      return state;
    },
  },
});

export const {updateCart} = cartSlice.actions;
export default cartSlice.reducer;
