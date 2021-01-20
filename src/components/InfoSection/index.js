import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../Button';
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
} from './InfoSectionElements';

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  reverse,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to='/homes' primary='true'>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <motion.img
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{ duration: 1 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 1.2 },
            }}
            src={image}
            alt='home'
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
