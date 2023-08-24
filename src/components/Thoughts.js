import React from 'react';
import styled from 'styled-components/macro';
import Post from './LinkedInPost'
import { GridWrapper } from './ReusableStyles.style';
import thoughtData from '../utils/thoughtData.json'
import MoreArrows from './MoreArrows';

const Thoughts = () => {
  const allLinkedInPosts = thoughtData.linkedInPosts;

  const linkedInPosts = allLinkedInPosts.map((post) => {
    return (
      <Post
        key={post.id}
        src={post.src} />
    )
  })

  return (
    <StyledProjectSection>
      <h2>Code thoughts</h2>
      <GridWrapper>
        {linkedInPosts}
      </GridWrapper>
      <LinkToLinkedIn
        href="https://www.linkedin.com/in/elin-s-683a867a/">
        <strong>For more thoughts on code, take a look at my LinkedIn profile</strong>
        <MoreArrows />
      </LinkToLinkedIn>
    </StyledProjectSection>
  )
}

export default Thoughts;

const StyledProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const LinkToLinkedIn = styled.a`
  color: var(--heading);
  font-size: 18px;
  margin: 1rem 0;
  display: block;
  text-decoration: underline;

  @media (min-width: 1200px) {
    transition: transform .5s;
  &:hover {
    transform: scale(1.1);
  }
}
`