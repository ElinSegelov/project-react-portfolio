import React from 'react'
import styled from 'styled-components/macro'

const LinkedInPost = ({ src }) => {
  return (
    <Post
      src={src}
      title="Code thought" />
  )
}

export default LinkedInPost;

const Post = styled.iframe`
  border: 2px solid var(--ligtherGreen);
  width: 85vw;
  height: 30rem;
  margin-bottom: 1rem;
  
  @media (min-width: 600px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`
