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
import PostsTable from './components/postsTable'
import TestArea from './components/testArea'
import './style.css'

const Blog = props => {

    const { posts, addPost, viewPost  } = props

    return (
        <div id="blog">
            <div className="header">
                <h1>User Stories</h1>
            </div>
            <div className="content">
                <p>Have something new to share with the rest of the world?</p>
                <button 
                    type="button" 
                    className="btn btn-success btn-lg" 
                    id="btn-addPost" 
                    onClick={() => addPost()}
                >
                    Add post
                </button>
                <PostsTable posts={posts} viewPost={viewPost} />
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
            viewPost: (id) => push('/view-post/' + id + '/')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
