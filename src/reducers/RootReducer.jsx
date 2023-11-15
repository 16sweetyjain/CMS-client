import helpXReducer from "./HelpXReducer";
import faqReducer from "./FaqReducer";
import { combineReducers } from 'redux';
import userReducer from "./UserReducer";


const rootReducer = combineReducers({
    helpX: helpXReducer,
    faq: faqReducer,
    user: userReducer
  });

  export default rootReducer;