import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// Reducer
import UserReducer from './slice/User.Slide';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig: any = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
  whitelist: ['']
};

const userPersistConfig = {
  key: 'user',
  whitelist: [],
  storage: storageSession
};

// định nghĩa cho slide
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, UserReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
