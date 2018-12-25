import * as React from 'react'
import styled from '../shared/style'

import { ISubredditInfoProps } from '../shared/interfaces'

const SubredditInfoContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

const SubredditName = styled.a`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.5;
  }
`

const UserData = styled.span`
  font-size: 20px;
`

export default function SubredditInfo({
  name,
  numSubscribers,
  numUsersOnline,
  redditUrl
}: ISubredditInfoProps) {
  return (
    <SubredditInfoContainer>
      <SubredditName href={`${redditUrl}/r/${name}`} target="_blank">
        /r/{name}
      </SubredditName>
      <UserData>
        {numSubscribers} Subscribers - {numUsersOnline} Online
      </UserData>
    </SubredditInfoContainer>
  )
}
