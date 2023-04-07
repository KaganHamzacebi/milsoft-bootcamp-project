import cartControllerSlice from '../slices/CartControllerSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducers = combineReducers({
  cartController: cartControllerSlice
});