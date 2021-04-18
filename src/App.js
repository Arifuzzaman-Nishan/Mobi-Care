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
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Book from './Component/DashBoard/user/Book/Book';
import BookList from './Component/DashBoard/user/BookList/BookList';
import Review from './Component/DashBoard/user/Review/Review';
import OrderList from './Component/DashBoard/Admin/OrderList/OrderList';
import AddService from './Component/DashBoard/Admin/AddService/AddService';
import MakeAdmin from './Component/DashBoard/Admin/MakeAdmin/MakeAdmin';

import ManageService from './Component/DashBoard/Admin/ManageService/ManageService';
import DashBoard from './Component/DashBoard/DashBoard/DashBoard';



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

          <PrivateRoute path='/DashBoard/book/:id'>
            <Book></Book>
          </PrivateRoute>

          <PrivateRoute path='/DashBoard/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard/booklist'>
            <BookList></BookList>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard/orderlist'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard/addservice'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard/makeadmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard/manageservice'>
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path='/DashBoard'>
            <DashBoard></DashBoard>
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