import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../reducers/blog'
import PostTable from './components/postTable'
import TestArea from './components/testArea'
import './index.css'

const Blog = props => {

    const { posts, addPost, viewPost  } = props

    return (
        <div>
            <div id="blog-header">
                <h1>User Stories</h1>
                <p>Have something new to share with the rest of the world?</p>
                <button type="button" class="btn btn-success btn-lg" onClick={() => addPost()}>Add post</button>
            </div>
            <div id="blog-content">
                <PostTable posts={posts} viewPost={viewPost} />
                <TestArea {...props}/>
            </div>
        </div>
    )
}

const mapStateToProps = ({ blog }) => ({
    posts: blog.posts,
    count: blog.count,
    isIncrementing: blog.isIncrementing,
    isDecrementing: blog.isDecrementing
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            addPost: () => push('/add-post'),
            viewPost: () => push('/add-post')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
