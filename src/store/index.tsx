/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "../reducers/userReducer";
// import rootReducer from "../reducers/rootReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: false,
  enhancers: [devToolsEnhancer({})],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
