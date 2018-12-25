export interface ISubredditData {
  numSubscribers: number
  numUsersOnline: number
  topPosts: any[]
}

export interface IAppState {
  fetchingTrendingSubreddits: boolean
  fetchingSubredditData: boolean
  subredditData: any,
  selectedSubreddit: string
  trendingSubreddits: string[]
  useOldReddit: boolean
}

export interface ISubredditSelectorProps {
  loading: boolean
  handleSubClick: (sub: string) => void
  trendingSubreddits: string[]
  selectedSubredditName: string
}

export interface IStyledSubredditProps {
  isSelected: boolean
}

export interface ISubredditProps {
  loading: boolean
  name: string
  data: ISubredditData
  useOldReddit: boolean
}

export interface ISubredditInfoProps {
  name: string
  numSubscribers: number
  numUsersOnline: number
  redditUrl: string
}

interface Post {
  id: string
  permalink: string
  title: string
  url: string
  ups: number
}

export interface IPostListProps {
  posts: Post[]
  redditUrl: string
}

export interface IOldRedditCheckboxProps {
  checked: boolean
  handleCheckboxClick: (event: React.ChangeEvent<HTMLInputElement>) => void
}
