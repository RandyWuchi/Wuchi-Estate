import React from 'react';
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
          <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
