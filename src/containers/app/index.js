import React from 'react'
import { Route, Link } from 'react-router-dom'
import Blog from '../blog'
import AddPost from '../addPost'
import './index.css'

const App = () => (
    <div class="container text-center">

        <header>
            <Link to="/">Blog</Link>
            <Link to="/add-post">Add Post</Link>
        </header>

        <main>
            <Route exact path="/" component={Blog} />
            <Route exact path="/add-post" component={AddPost} />
        </main>

    </div>
)

export default App
