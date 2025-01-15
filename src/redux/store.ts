import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './redux';
import storage from 'redux-persist/lib/storage'; // localStorage 사용

// redux-persist 설정
const persistConfig = {
  key: 'auth', // 상태 저장 키
  storage, // localStorage에 저장
  whitelist: ['user'], // 저장할 상태 (reducer의 특정 키만 저장 가능)
};

// authReducer에 persistReducer 적용
const persistedReducer = persistReducer(persistConfig, authReducer);

// Redux store 구성
const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

// Redux Persist를 위한 persistor 생성
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
