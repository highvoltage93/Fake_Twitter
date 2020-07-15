import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';
import MainPage from './Pages/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';

function App(props) {
  let auth = true

  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />

          <div className="App_wrapper">
            {auth && <NavBar />}
            <div className="app_content">
              <Route exact path="/app/profile" component={MainPage} />
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
