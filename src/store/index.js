import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import rootReducer from '../reducers/RootReducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

// Create the Redux store using the combined reducer

const store = configureStore({ reducer : rootReducer, middleware : middleware} );

export default store;
