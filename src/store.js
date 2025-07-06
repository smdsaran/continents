import { configureStore } from '@reduxjs/toolkit';
import continentsReducer from './redux-slice/continentsSlice';

export const store = configureStore({
  reducer: {
    continents: continentsReducer,
  },
});
