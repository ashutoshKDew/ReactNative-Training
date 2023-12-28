import {DishType} from './RestaurantDetailType';

// // Define the structure of your cart item
export type CartItem = {
  dish: DishType;
  quantity: number;
};

// Define the structure of your Redux state
export type CartState = {
  items: CartItem[];
  totalPrice: number;
};
