import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { contactApi } from './services/contactsAPI';

import { filterSlice } from './slices/filterSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
export default store;
