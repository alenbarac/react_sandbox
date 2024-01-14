import { useSelector } from 'react-redux'
import { selectAllPosts } from '../postsSlice'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
function PostsList() {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="grid grid-cols-2 gap-2">
      {orderedPosts.map((post) => (
        <div className="card  bg-primary text-primary-content" key={post.id}>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="text-sm">{post.content.substring(0, 100)}</p>
            <hr />
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Read more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList
