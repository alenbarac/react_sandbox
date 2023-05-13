import { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtn, setIdFromBtn] = useState(1)

  const handleCLick = () => {
    setIdFromBtn(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [idFromBtn])
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleCLick}>
        fetch post
      </button>
      <div>{post.title}</div>
      {/* {posts?.map((post) => (
        <div key={post.id}>
          {post.title}
          <hr />
        </div>
      ))} */}
    </div>
  )
}

export default DataFetching
