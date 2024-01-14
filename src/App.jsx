import AddPostForm from './app/features/posts/components/AddPostForm'
import PostsList from './app/features/posts/components/PostsList'
import './index.css'

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 mt-20 ">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-5">
            <div className="card bg-black shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Create Post</h2>
                <AddPostForm />
              </div>
            </div>
          </div>
          <div class="col-span-7">
            <div className="card bg-black shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <PostsList />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
