import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ErrorComponent from "./ErrorComponent";

const PrivateRoute = ({ children }) => {
  // Check if the user is logged in
  const isLoggedIn = useSelector(state => state.user.isUserAuthenticated);

  // If the user is logged in, render the children
  if (isLoggedIn) {
    return children;
  } else {
    // If the user is not logged in, redirect to the login page
    return <ErrorComponent/>;
  }
};

export default PrivateRoute;