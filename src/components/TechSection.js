/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components/macro';
import { ContentWrapper } from './ReusableStyles.style';

const TechSection = () => {
  return (
    <StyledTechSection>
      <ContentWrapper>
        <h2>Tech</h2>
        <p>
          React, React Hooks, TypeScript, Redux, Node.js, Express, REST-API, Mongo DB,
          Styled-Components, Tailwind CSS, JavaScript ES6, semantic HTML, CSS
        </p>
      </ContentWrapper>
    </StyledTechSection>
  )
}

export default TechSection;

const StyledTechSection = styled.section`
    text-align: center;
    display: flex;
    justify-content: center;
  `
