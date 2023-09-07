import React from 'react';
import styled from 'styled-components/macro';
import { ContentWrapper, DarkerContainer } from './ReusableStyles.style';
import ListSection from './ListSection';

const Skills = () => {
  return (
    <StyledSkillsWrapper>
      <ContentWrapper>
        <h2>Skills</h2>
        <StyledSkillsContainer>
          <div>
            <ListSection
              heading="Code"
              ListItems={['React', 'Redux', 'Styled Components', 'TailWind CSS', 'TypeScript', 'Node.js', 'REST-API', 'Next.js', 'MongoDB', 'JavaScript ES6', 'HTML 5', 'CSS3', 'Git']} />
          </div>
          <div>
            <ListSection
              heading="Upcoming"
              ListItems={['More TypeScript', 'Jest']} />
          </div>
          <div>
            <ListSection
              heading="Toolbox"
              ListItems={['VS Code', 'GitHub', 'Kanban', 'Jira', 'Trello', 'Slack']} />
          </div>
          <div>
            <ListSection
              heading="More"
              ListItems={['Agile methodology', 'Pair-programming', 'Mob-programming', 'Excellent interpersonal skills']} />
          </div>
        </StyledSkillsContainer>
      </ContentWrapper>
    </StyledSkillsWrapper>
  )
}

export default Skills;

const StyledSkillsWrapper = styled(DarkerContainer)`

h3 {
  background-color: transparent;
  color: var(--heading);
  font-size: 17px;
  margin: 0 auto;
}
`
const StyledSkillsContainer = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 600px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    width: 80vw;
  }
  @media (min-width: 992px) {
    width: 60vw;

  }
  
  div:nth-child(1) {
  grid-column: 1
  }
  div:nth-child(2) {
    grid-column: 1;
  }
  div:nth-child(3) {
    grid-column: 2;

  }
  div:nth-child(4) {
    grid-column: 2;
    @media (min-width: 600px) {
      grid-column: 3;
    }
  }
  
`
