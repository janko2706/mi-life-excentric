import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Routes from './Routes';

function App() {
  const [loaded, setLoaded] = useState(false);
  if (window.innerWidth > 900) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoaded(true);
      }, 3000);
    });
  } else {
    setLoaded(false);
  }
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
      {!loaded ? (
        <ReactLoading
          className='centerLoading'
          type='bars'
          color='var(--eggplant)'
          height={200}
          width={100}
        />
      ) : (
        <Router>
          <NavBar />
          <Routes />
        </Router>
      )}
    </>
  );
}

export default App;
