import { UsernitialState } from "./UserInitialState";

const userReducer = (state = UsernitialState, action) => {
  
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'SET_USER_DATA':
            newState.user = action.payload.user;
            break;

        case 'CREATE_USER' :
            newState.user = action.payload;
            break;

        case 'SET_USER_AUTHENTICATION':
            newState.isUserAuthenticated = action.payload;
            break;

        default:
            break;
    }

    return newState;
};

export default userReducer;