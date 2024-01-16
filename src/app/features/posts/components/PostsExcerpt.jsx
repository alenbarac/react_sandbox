import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

function PostsExcerpt({ post }) {
  return (
    <div className="card  bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="text-sm">{post.body.substring(0, 100)}</p>
        <hr />
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        <div className="card-actions justify-end">
          <button className="btn btn-sm">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default PostsExcerpt
