import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';  

import PrivateRoute from './components/common/PrivateRoute';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';

import './App.css';


//const store = createStore(() => [], {}, applyMiddleware());

//Check for token
if(localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info/expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenicated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
      //Logout user
      store.dispatch(logoutUser);
      // clear current profile
      store.dispatch(clearCurrentProfile());

      // Redirect to login
      window.location.href = '/login';
  }
}



function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={ Landing }/>
          <div className="container">
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/login" component={ Login }/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={ Dashboard }/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={ CreateProfile }/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={ EditProfile }/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/add-experience" component={ AddExperience }/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/add-education" component={ AddEducation }/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
