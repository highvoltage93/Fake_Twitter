import React from 'react';
import './App.scss';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Route, Redirect } from 'react-router-dom';
import ExploreContainer from './Pages/Explore/ExploreContainer';
import LoginContainer from './Pages/LogIn/LoginContainer';
import RegistrationContainer from './Pages/Registration/RegistrationContainer';
import MainpageContainer from './Pages/MainPage/MainpageContainer';
import NavBar from './Components/NavBar/NavBar';
import My_TweetsContainer from './Pages/My_Tweets/My_TweetsContainer';
import setAuthToken from './middleware/auth_middlewre'
import store from './Store/store';
import { loadThunk } from './Store/auth_actions'
import { connect } from 'react-redux';
import InfoContentContainer from './Pages/InfoContent/InfoContentContainer';
import SettingsPageContainer from './Pages/SettingsPage/SettingsPageContainer';
import Modal from './Components/Modal/Modal';
import FollowPageContainer from './Pages/FollowPage/FollowPageContainer';


function App(props) {

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  React.useEffect(() => {
    store.dispatch(loadThunk())
  }, [props.background_color])

  let auth = props.auth

  return (
    <>
      <div className="App" className={`App ${props.background_color}`}>
        <Modal />
        <HeaderContainer />
        <div className="container">
          <Route exact path="/explore" component={ExploreContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/registration" component={RegistrationContainer} />

          <div className="App_wrapper">

            {auth && <NavBar />}
            {
              auth && <div className="app_content">
                <div className="app-main-content">
                  <Route path="/profile/:profileID?" component={MainpageContainer} />
                  <Route exact path="/settings" component={SettingsPageContainer} />
                  <Route exact path="/follow/:profileID?" component={FollowPageContainer} />
                  {
                    auth
                      ? <Route exact path="/" component={My_TweetsContainer} />
                      : <Route exact path="/" component={ExploreContainer} />
                  }
                </div>
                <div className="app-dop-content">
                  <InfoContentContainer />
                </div>

              </div>
            }

          </div>

        </div>
      </div>

    </>
  );
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuth,
    background_color: state.auth.background_color
  }
}

export default connect(mapStateToProps, null)(App)