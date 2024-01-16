import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from '../postsSlice'
import PostsExcerpt from './PostsExcerpt'

function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content
  if (postsStatus === 'loading') {
    content = <p>Loading ...</p>
  } else if (postsStatus === 'succeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => <PostsExcerpt post={post} key={post.id} />)
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>
  }

  return <div className="grid grid-cols-3 gap-2">{content}</div>
}

export default PostsList
