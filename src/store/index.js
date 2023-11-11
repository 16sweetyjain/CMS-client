import { createStore } from 'redux';
import rootReducer from '../reducers/RootReducer';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';


const logMiddleWare = createLogger(),
    middleWares = composeWithDevTools(
        thunkMiddleware,
        logMiddleWare
    );

// Create the Redux store using the combined reducer

const store = createStore(rootReducer, middleWares);

export default store;
