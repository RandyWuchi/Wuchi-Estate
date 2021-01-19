import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import {
  Arrow,
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtons,
} from './HeroElements';

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeOut = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeOut.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <motion.h1
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.price}
                    </motion.p>
                    <motion.div
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Button
                        to={slide.path}
                        primary='true'
                        css={`
                          max-width: 160px;
                        `}
                      >
                        {slide.label}
                        <Arrow />
                      </Button>
                    </motion.div>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
