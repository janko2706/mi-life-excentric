import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

function App() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        JSON.stringify(
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      );
    },
    false
  );
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
