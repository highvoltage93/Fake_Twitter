import React from 'react';
import './App.scss';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import LoginContainer from './Pages/LogIn/LoginContainer';
import RegistrationContainer from './Pages/Registration/RegistrationContainer';
import MainpageContainer from './Pages/MainPage/MainpageContainer';
import NavBar from './Components/NavBar/NavBar';
import My_TweetsContainer from './Pages/My_Tweets/My_TweetsContainer';
import setAuthToken from './middleware/auth_middlewre'
import store from './Store/store';
import { loadThunk } from './Store/actions'
import { connect } from 'react-redux';


function App(props) {

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  } 

  React.useEffect(() => {
    store.dispatch(loadThunk())
  }, [])

  let auth = props.auth

  return (
    <>
      <div className="App">
        <HeaderContainer />
        <div className="container">
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/registration" component={RegistrationContainer} />

          <div className="App_wrapper">
            {auth && <NavBar />}
            <div className="app_content">
              <Route exact path="/profile" component={MainpageContainer} />
              <Route exact path="/home" component={My_TweetsContainer} />
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

let mapStateToProps = (state) => {
  return {
      auth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, null)(App)