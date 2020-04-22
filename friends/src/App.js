import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendsForm from './components/FriendsForm';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';





function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
          <li>
            <Link to='/protected'> friends</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={FriendsForm} />
          <Route component={Login} />

        </Switch>

      </div>
    </Router >
  );
}

export default App;
