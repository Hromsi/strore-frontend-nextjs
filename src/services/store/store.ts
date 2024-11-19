import { combineSlices, configureStore } from '@reduxjs/toolkit';
import productReducer from '@/services/store/slices/productSlice';
import categoryReducer from '@/services/store/slices/categorySlice';
import cartReducer from '@/services/store/slices/cartSlice';

const rootReducer = combineSlices({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = AppStore['dispatch']