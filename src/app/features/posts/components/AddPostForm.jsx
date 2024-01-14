import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from '../postsSlice'
import { selectAllUsers } from '../../users/usersSlice'

function AddPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const onAuthorChange = (e) => setUserId(e.target.value)

  const onPostSave = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
    }
    setTitle('')
    setContent('')
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

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
      <div className="form-control mt-3">
        <select
          className="select select-primary w-full max-w-xs"
          name="postAuthor"
          defaultValue=""
          onChange={onAuthorChange}
        >
          <option value="" disabled>
            Select Author
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-secondary text-white"
          onClick={onPostSave}
          disabled={!canSave}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddPostForm
