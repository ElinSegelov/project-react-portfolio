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
              heading="Tech stack"
              ListItems={['React', 'Redux', 'TypeScript', 'TailWind CSS', 'Node.js', 'REST-API', 'Next.js', 'MongoDB', 'Styled-Components', 'JavaScript ES6', 'HTML 5', 'CSS3', 'Git']} />
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
    grid-template-columns: repeat(4, 1fr);
    width: 80vw;
  }

  @media (min-width: 992px) {
    width: 60vw;
  }

`
