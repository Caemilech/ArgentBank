import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer.jsx';
import { userReducer } from './reducers/user.reducer.jsx';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: true
})

const persistor = persistStore(store)

export {persistor}
export default store