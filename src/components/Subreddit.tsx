import * as React from 'react'

import SubredditInfo from './SubredditInfo'
import PostList from './PostList'

import { ISubredditProps } from '../shared/interfaces'
import styled, { fadeIn } from '../shared/style'

const SubredditContainer = styled.div`
  background: #e1e1e1;
  padding: 56px;
  width: 50vw;
  height: 50vh;
  margin-bottom: 32px;
  border-radius: 4px;
  box-shadow: 4px 4px 8px #7b7b7b;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubredditContent = styled.div`
  height: 100%;
  overflow: auto;
  animation: ${fadeIn} 300ms linear;
`

export default function Subreddit({ loading, name, data, useOldReddit }: ISubredditProps) {
  const { numSubscribers, numUsersOnline, topPosts } = data
  const redditUrl = `https://${useOldReddit ? 'old.' : ''}reddit.com`
  return (
    <SubredditContainer>
      {loading ? (
        <div>loading...</div>
      ) : (
        <SubredditContent>
          <SubredditInfo
            name={name}
            numSubscribers={numSubscribers}
            numUsersOnline={numUsersOnline}
            redditUrl={redditUrl}
          />
          <PostList posts={topPosts} redditUrl={redditUrl} />
        </SubredditContent>
      )}
    </SubredditContainer>
  )
}
