import * as React from 'react'
import styled from '../shared/style'

import { IPostListProps } from '../shared/interfaces'

const PostListContainer = styled.ol`
  margin: 0;
  padding-right: 16px;
`

const Post = styled.li`
  margin-bottom: 8px;
`

const Link = styled.span`
  &:hover {
    opacity: 0.5;
  }
`

export default function PostList({ posts, redditUrl }: IPostListProps) {
  return (
    <PostListContainer>
      {posts.map(({ id, permalink, title, url, ups }) => (
        <Post key={id}>
          <span>👍{ups} | </span>
          <Link>
            <a href={url} target="_blank">
              {title}
            </a>{' '}
            |{' '}
          </Link>
          <Link>
            <a href={`${redditUrl}${permalink}`} target="_blank">
              💬comments
            </a>
          </Link>
        </Post>
      ))}
    </PostListContainer>
  )
}
