import React, { createContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import NavBar from './Component/Shared/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import UserDashBoard from './Component/UserDashBoard/UserDashBoard/UserDashBoard';
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';




export const userContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/userdashboard/book/:id'>
            <UserDashBoard></UserDashBoard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;