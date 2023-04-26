import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Routes from './Routes';

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.innerWidth < 900 && setLoaded(true);
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoaded(true);
      }, 3000);
    });
    return () =>
      document.removeEventListener('load', () => {
        if (window.innerWidth > 900) {
          setTimeout(() => {
            setLoaded(true);
          }, 3000);
        }
      });
  }, [setLoaded]);

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
