import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { Detail } from './features/detail/Detail';
import { Landing } from './features/landing/Landing';
import { Login } from './features/login/Login';
import { Nav } from './features/nav/Nav';
import { Top3 } from "./features/top3/Top3.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/"><Login /></Route>
      <Route exact path="/top"><Top3/></Route>
      <Route exact path="/landing"><Landing /></Route>
      <Route exact path="/hacker/:uuid"><Detail /></Route>
    </div>
  );
}

export default App;
