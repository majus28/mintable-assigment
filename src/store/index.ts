import { configureStore } from '@reduxjs/toolkit';
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
import persistConfig from './persist';
import rootReducers from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([sagaMiddleware]),
});
sagaMiddleware.run(rootSagas);
export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
