import React from 'react'
import { Route } from 'react-router-dom'
import Blog from '../blog'
import AddPost from '../addPost'
import ViewPost from '../viewPost'
import './style.css'

const App = () => (
    <main className="container text-center">
        <Route exact path="/" component={Blog} />
        <Route exact path="/add-post" component={AddPost} />
        <Route exact path="/view-post" component={ViewPost} />
    </main>
)

export default App
