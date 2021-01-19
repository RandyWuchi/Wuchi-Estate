import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

import Hero from './components/Hero';
import Navbar from './components/NavBar';
import { sliderData } from './data/SliderData';
import GlobalStyles from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={sliderData} />
    </>
  );
}

export default App;
