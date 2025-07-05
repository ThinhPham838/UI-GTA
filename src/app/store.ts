import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// Reducer

import RoomReducer from './slice/Room.Slide';

const persistConfig: any = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['']
};

const roomsPersistConfig = {
  key: 'rooms',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  rooms: persistReducer(roomsPersistConfig, RoomReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
