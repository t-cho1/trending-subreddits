export function getCurrentDate() {
  return new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export async function getTrendingSubreddits() {
  const url = 'https://www.reddit.com/api/trending_subreddits.json'
  try {
    const result = await fetch(url)
    const { subreddit_names } = await result.json()
    return subreddit_names
  } catch (e) {
    console.error(e)
  }
}

export async function getSubredditInfo(
  sub: string
): Promise<{ numUsersOnline: number; numSubscribers: number }> {
  const url = `https://www.reddit.com/r/${sub}/about.json`
  try {
    const result = await fetch(url)
    const {
      data: { active_user_count, subscribers }
    } = await result.json()
    return { numUsersOnline: active_user_count, numSubscribers: subscribers }
  } catch (e) {
    console.error(e)
  }
}

interface Post {
  name: string
  permalink: string
  title: string
  url: string
  ups: number
}

export async function getTopPosts(sub: string) {
  const url = `https://www.reddit.com/r/${sub}/top.json?t=all`
  try {
    const result = await fetch(url)
    const {
      data: { children }
    } = await result.json()
    const topPosts = children
      .map(({ data: { name: id, permalink, title, url, ups } }: { data: Post }) => ({
        id,
        permalink,
        title,
        url,
        ups
      }))
      .slice(0, 10)
    return topPosts
  } catch (e) {
    console.error(e)
  }
}
