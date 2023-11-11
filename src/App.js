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
        <Route exact path="/signup" element={<Signup />}/>
        <Route path='/' element={<SignIn />} />

          <Route path='/logout' element={<Logout />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/faq' element={<FaqForm/>} />
          <Route path='/helpX' element={<HelpXForm />} />

      </Routes>
    </div>
  );
}

export default App;
