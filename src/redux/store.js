
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";
//для redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//конфіг для redux-persist
const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['filter'],
};


export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
  },

  //для redux-persist
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//для redux-persist
export const persistor = persistStore(store);