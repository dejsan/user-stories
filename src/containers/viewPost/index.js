import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    requestPost
} from '../../reducers/viewPost'
import './style.css'
import Post from './components/post'

class ViewPost extends React.Component {
    constructor(props) {
        super(props)
        this.postId = this.props.match.params.id // postID from 'url'
    }
    componentDidMount() {
        const { requestPost } = this.props
        requestPost(this.postId)
    }
    render(){
        const { postData, isRequestingPost, goToBlog } = this.props

        return (
            <div id="viewPost">
                <div className="header">
                    <h1>View Post</h1>
                </div>
                <div className="content">
                    <Post postData={postData} isRequestingPost={isRequestingPost} />
                    <button type="button" className="btn btn-lg btn-warning" onClick={() => goToBlog()}>Go Back</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ viewPost }) => ({
    postData: viewPost.postData,
    isRequestingPost : viewPost.isRequestingPost
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestPost,
            goToBlog: () => push('/')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPost)
