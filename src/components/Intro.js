/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components/macro';
import { ContentWrapper, DarkerContainer } from './ReusableStyles.style';

const Intro = () => {
  return (
    <StyledIntro>
      <ContentWrapper>
        <p>
          <Line /><Dot />
          Hello World! 🚀 Dive into the the portfolio of a Frontend Developer who melds
          the art of problem-solving with exceptional communication, thanks to a sturdy
          background in social work. My years in interpersonal dynamics now fuel my
          coding passion, with an ambition to master full-stack and soon delve into
          mobile app development. Curious to explore the synergy I bring? Let's have
          a chat on LinkedIn.
        </p>
      </ContentWrapper>
    </StyledIntro>
  )
}

export default Intro;

const StyledIntro = styled(DarkerContainer)`
  min-height: 40vh;

p {
  letter-spacing: 1px;
}
`

const Line = styled.span`
  border: 1px solid var(--ligtherGreen);
  display: inline-block;
  margin-bottom: 4px;
  width: 40px;
`

const Dot = styled.span`
  background-color: var(--ligtherGreen);
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 8px;
`
