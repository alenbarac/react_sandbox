import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from '../postsSlice'

function AddPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onPostSave = () => {
    if (title && content) {
      dispatch(postAdded(title, content))
    }
    setTitle('')
    setContent('')
  }

  return (
    <form>
      <div className="form-control mb-2">
        <input
          type="text"
          placeholder="Post title"
          name="postTitle"
          className="input input-bordered input-primary w-full"
          value={title}
          onChange={onTitleChange}
        />
      </div>

      <div className="form-control mb-3">
        <textarea
          className="textarea textarea-primary"
          placeholder="Post Content ..."
          name="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button type="button" className="btn btn-secondary text-white" onClick={onPostSave}>
          Save
        </button>
      </div>
    </form>
  )
}

export default AddPostForm
