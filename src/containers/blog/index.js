import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    requestPosts,
    requestDeletePost
} from '../../reducers/blog'
import PostsTable from './components/postsTable'
import './style.css'

class Blog extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { requestPosts  } = this.props
        requestPosts()
    }
    render(){
        const { requestPosts, isRequestingPosts, requestDeletePost, isRequestingDeletePost, posts, goToAddPost, goToViewPost  } = this.props
        
        return (
            <div id="blog">
                <div className="header">
                    <h1>User Stories</h1>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" className="btn btn-info btn-lg" id="btn-addPost" onClick={requestPosts}>
                                Refresh
                            </button>
                        </div>
                        <div className="col-md-4">
                            <p>Have something new to share with the rest of the world?</p>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-success btn-lg" id="btn-addPost" onClick={() => goToAddPost()}>
                                Add Post
                            </button>
                        </div>
                    </div>
                    <PostsTable 
                        posts={posts}
                        goToViewPost={goToViewPost}
                        requestDeletePost={requestDeletePost}
                        isRequestingDeletePost={isRequestingDeletePost}
                    />
                    { isRequestingPosts && 
                        <h2>Loading...</h2>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ blog }) => ({
    posts: blog.posts,
    isRequestingPosts: blog.isRequestingPosts,
    isRequestingDeletePost: blog.isRequestingDeletePost
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestPosts,
            requestDeletePost,
            goToAddPost: () => push('/add-post'),
            goToViewPost: (id) => push('/view-post/' + id)
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
