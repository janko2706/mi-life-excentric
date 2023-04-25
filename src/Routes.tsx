import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { ImagesApi } from './Components/ImagesApi/ImagesApi';
import Project from './Pages/Project/Project';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {ImagesApi.map(
          (
            item: {
              pictures: any[];
              name: string;
              about: { location: string; info: string };
            },
            index: number
          ) => {
            return (
              <Route
                key={index}
                path={`/${item.name}`}
                element={
                  <Project
                    projectPictures={item.pictures}
                    projectTitle={item.name}
                    about={{
                      location: item.about.location,
                      info: item.about.info,
                    }}
                  />
                }
              />
            );
          }
        )}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
