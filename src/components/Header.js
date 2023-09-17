import React from 'react';
import styled from 'styled-components/macro';
import profileImage from '../images/portrait.webp';
import heroImage from '../images/hero-img.webp'
import Logos from './Logos';

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledHeader>
      <HeroContainer>
        <HeroText>
          <h1>Portfolio: Elin Segelöv</h1>
          <h2>frontend</h2> <h2>developer</h2>
          <h3>
            [React, Redux, Node.js, Tailwind CSS, REST-APIs, TypeScript, NextJS]
          </h3>
        </HeroText>
        <Logos
          githubLogo={githubLogo}
          linkedinLogo={linkedinLogo}
          stackOverflowLogo={stackOverflowLogo} />
        <PortraitImg src={profileImage} alt="Portrait" />
      </HeroContainer>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  background-image: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  max-height: 30rem;
  position: relative;
  width: 100vw;
  padding: 0 1rem;
  
  @media (min-width: 600px) {
  height: 30rem;
  display: flex;
  justify-content: center;
}
`
const HeroContainer = styled.div`
  position: relative;
  height: 100%;
  
  @media (min-width: 600px) {
    width: 100%;
    max-width: 1000px;
  }
`
const HeroText = styled.div`
  color: #FCF8EC;
  position: absolute;
  top: 10rem;
  width: fit-content;


  h2 {
    background: none;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: .2rem;
    text-transform: capitalize;
    margin: 0;
    text-align: left;
    padding: 0;
  }
  
  h3 {
    text-align: left;
    text-transform: capitalize;
    font-size: 1rem;
    background: none;
    color: #FCF8EC;
    margin: 0.5rem 0;
    padding: 0;
  }

  @media (min-width: 600px) {
    top: auto; 
    bottom: 8rem; 
    left: 1rem;
    
    h2 {
      font-size: 50px;
    }
  }
  @media (min-width: 1024px) {
    bottom: 5rem;
  }
`
const PortraitImg = styled.img`
  border: solid white 2px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: 1rem;
  bottom: -1.5rem;
  width: 7rem;

  @media (min-width: 600px) {
      width: 10rem;
  }
`
