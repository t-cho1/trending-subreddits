import * as React from 'react'
import styled, { fadeIn } from '../shared/style'

import { ISubredditSelectorProps, IStyledSubredditProps } from '../shared/interfaces'

const SubredditSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  animation: ${fadeIn} 300ms linear;
`

const StyledSubreddit = styled.div<IStyledSubredditProps>`
  cursor: pointer;
  ${(p) => p.isSelected && `
    font-weight: bold;
    text-decoration: underline;
  `}

  &:hover {
    opacity: 0.5;
  }
`

export default function SubredditSelector({
  loading,
  handleSubClick,
  selectedSubredditName,
  trendingSubreddits
}: ISubredditSelectorProps) {
  return (
    <SubredditSelectorContainer>
      {loading ? '...' : (
        trendingSubreddits.map((trendingSub) => (
          <StyledSubreddit
            key={trendingSub}
            onClick={() => handleSubClick(trendingSub)}
            isSelected={trendingSub === selectedSubredditName}
          >
            /r/{trendingSub}
          </StyledSubreddit>
        ))
      )}
    </SubredditSelectorContainer>
  )
}
