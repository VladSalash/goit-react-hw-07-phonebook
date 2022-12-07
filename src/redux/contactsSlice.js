import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //   },

  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(el => el.id === action.payload.id);
  //     state.contacts.splice(index, 1);
  //   },

  //   changeFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
