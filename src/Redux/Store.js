import { configureStore } from "@reduxjs/toolkit";
import localizationReducer from "./Localization";
import authorization from "./Authorization";
import Product from "./Product";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartRedux";
import wishlistReducer from "./wishListRedux";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const RootReducers = combineReducers({
  currentLocal: localizationReducer,
  auth: authorization,
  product: Product,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
