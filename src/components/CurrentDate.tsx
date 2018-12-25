import * as React from 'react'
import styled from '../shared/style'

import { getCurrentDate } from '../shared/helpers'

const CurrentDateContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 32px;
`

const StyledCurrentDate = styled.span`
  font-weight: bold;
`

const CurrentDate = () => (
  <CurrentDateContainer>
    <span>📈</span>
    <span>
      Trending Subreddits for <StyledCurrentDate>{getCurrentDate()}:</StyledCurrentDate>
    </span>
  </CurrentDateContainer>
)

export default CurrentDate
