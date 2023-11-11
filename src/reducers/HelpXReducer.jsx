import { HelpXFormInitialState } from "./HelpXFormInitialState";

const helpXReducer = (state = HelpXFormInitialState, action) => {
  
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'ADD_HELPX':
            newState.helpX = action.payload.helpX;
            break;

        case 'SET_HELPX_DATA' :
            newState.helpX = action.payload;
            break;

        default:
            break;
    }

    return newState;
};

export default helpXReducer;