import React from 'react'
import { Route } from 'react-router-dom'
import Blog from '../blog'
import AddPost from '../addPost'
import './index.css'

const App = () => (
    <main class="container text-center">
        <Route exact path="/" component={Blog} />
        <Route exact path="/add-post" component={AddPost} />
    </main>
)

export default App
