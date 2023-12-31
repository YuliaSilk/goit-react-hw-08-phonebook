import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactSlice";
import { authReducer } from "./auth/slice";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist'


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }

const tokenPersistedReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
reducer: {
  auth: tokenPersistedReducer,
   contacts: contactsReducer,
   filter: filterReducer,
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
