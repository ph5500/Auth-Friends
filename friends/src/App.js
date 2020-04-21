import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import FriendsForm from './components/FriendsForm';
import Login from './components/Login';
import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      
    <div className="App">
        <div className="navLinks">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/protected">Friends Only</NavLink>
        </div>

      <Switch>
       <Route exact path = '/' component ={Login}></Route>
        <Route  path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={FriendsForm}/>
        <Route component={Login}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
