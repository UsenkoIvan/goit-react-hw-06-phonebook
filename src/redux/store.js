import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
