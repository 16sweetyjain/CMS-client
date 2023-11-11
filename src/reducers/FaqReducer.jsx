import { FaqFormInitialState } from "./FaqFormInitialState";

const faqReducer = (state = FaqFormInitialState, action) => {
  
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'ADD_FAQ':
            newState.faq = action.payload;
            break;

        case 'SET_FAQ_DATA' :
            newState.faq = action.payload;
            break;

        default:
            break;
    }

    return newState;
};

export default faqReducer;