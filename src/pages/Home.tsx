import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Specials from '../components/Specials';

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Specials />
    </>
  );
};

export default Home;