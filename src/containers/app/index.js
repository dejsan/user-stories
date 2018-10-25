import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import AddPost from '../addPost'
import './index.css'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/add-post">Add Post</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-post" component={AddPost} />
    </main>
  </div>
)

export default App
