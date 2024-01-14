import { useSelector } from 'react-redux'
import { selectAllPosts } from '../postsSlice'
function PostsList() {
  const posts = useSelector(selectAllPosts)

  return (
    <div className="grid grid-cols-2 gap-2">
      {posts.map((post) => (
        <div className="card  bg-primary text-primary-content" key={post.id}>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="text-sm">{post.content}</p>
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
