import './App.css';
import { Routes , Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import SignIn from './components/Signin';
import Signup from './components/Signup';
import Logout from './components/Logout';
import FaqForm from './components/FaqForm';
import HelpXForm from './components/HelpXForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Content Managemet System</h1>
      </header>

      <Routes>
        <Route exact path="/signup" component={() => <Signup />}/>
        <Route exact path='/' component={() => <SignIn />} />
        <PrivateRoute  path='/logout' component={() => <Logout />} />
        <PrivateRoute path='/dashboard' component={() => <Dashboard />} />
        <PrivateRoute path='/faq' component={() => <FaqForm/>} />
        <PrivateRoute path='/helpX' component={() => <HelpXForm />} />
      </Routes>
    </div>
  );
}

export default App;
