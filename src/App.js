import React, { useState } from 'react';

import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import GlobalStyles from './globalStyles';
import { sliderData } from './data/SliderData';
import InfoSection from './components/InfoSection';
import { infoData } from './data/InfoData';

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
      <InfoSection {...infoData} />
    </>
  );
}

export default App;
