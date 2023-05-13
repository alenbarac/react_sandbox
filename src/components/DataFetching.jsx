import { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}) {post.title}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default DataFetching
