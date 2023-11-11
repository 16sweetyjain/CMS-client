import helpXReducer from "./HelpXReducer";
import faqReducer from "./FaqReducer";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    helpX: helpXReducer,
    faq: faqReducer,
  });

  export default rootReducer;