import * as React from 'react'

import CurrentDate from './CurrentDate'
import Subreddit from './Subreddit'
import SubredditSelector from './SubredditSelector'
import OldRedditCheckbox from './OldRedditCheckbox'

import { IAppState, ISubredditData } from '../shared/interfaces'
import { getTrendingSubreddits, getSubredditInfo, getTopPosts } from '../shared/helpers'
import styled from '../shared/style'

const initialSubredditData: ISubredditData = {
  numSubscribers: 0,
  numUsersOnline: 0,
  topPosts: []
}

const StyledApp = styled.div`
  margin: 0 160px;
`

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      fetchingTrendingSubreddits: true,
      fetchingSubredditData: true,
      subredditData: {},
      selectedSubreddit: '',
      trendingSubreddits: [],
      useOldReddit: false
    }
  }

  async componentDidMount() {
    this.setState({ fetchingTrendingSubreddits: true })
    const trendingSubreddits = await getTrendingSubreddits()
    this.setState({ fetchingTrendingSubreddits: false })
    if (trendingSubreddits) {
      this.setState({ trendingSubreddits })
      const firstTrendingSub = trendingSubreddits[0]
      this.fetchSubredditData(firstTrendingSub)
    }
  }

  async fetchSubredditData(sub: string) {
    this.setState({ fetchingSubredditData: true })
    const { numSubscribers, numUsersOnline } = await getSubredditInfo(sub)
    const topPosts = await getTopPosts(sub)
    this.setState({
      fetchingSubredditData: false,
      selectedSubreddit: sub,
      subredditData: {
        ...this.state.subredditData,
        [sub]: {
          numSubscribers,
          numUsersOnline,
          topPosts
        }
      }
    })
  }

  handleSubClick = async (sub: string) => {
    this.setState({ selectedSubreddit: sub })
    if (!this.state.subredditData[sub]) {
      this.fetchSubredditData(sub)
    }
  }

  handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ useOldReddit: event.target.checked })
  }

  render() {
    const {
      fetchingTrendingSubreddits,
      fetchingSubredditData,
      subredditData,
      selectedSubreddit,
      trendingSubreddits,
      useOldReddit
    } = this.state
    const selectedSubredditData = subredditData[selectedSubreddit] || initialSubredditData
    return (
      <StyledApp>
        <CurrentDate />
        <SubredditSelector
          loading={fetchingTrendingSubreddits}
          handleSubClick={this.handleSubClick}
          selectedSubredditName={selectedSubreddit}
          trendingSubreddits={trendingSubreddits}
        />
        <Subreddit
          loading={fetchingSubredditData}
          name={selectedSubreddit}
          data={selectedSubredditData}
          useOldReddit={useOldReddit}
        />
        <OldRedditCheckbox checked={useOldReddit} handleCheckboxClick={this.handleCheckboxClick} />
      </StyledApp>
    )
  }
}
