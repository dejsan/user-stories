import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync
} from '../../reducers/viewPost'
import './style.css'
import Post from './components/post'

const viewPost = props => {

    const { postData, goBack } = props

    return (
        <div id="addPost">
            <div className="header">
                <h1>View Post</h1>
            </div>
            <div className="content">
                <Post postData={postData} />
                <button type="button" className="btn btn-lg btn-warning" onClick={() => goBack()}>Go Back</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ viewPost }) => ({
    postData: viewPost.postData
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            goBack: () => push('/')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(viewPost)
