import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/LogIn/LogIn';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" component={Explore} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
      
    </>
  );
}

export default App;
