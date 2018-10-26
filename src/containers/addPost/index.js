import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync
} from '../../reducers/addPost'
import AddForm from './components/addForm'
import './style.css'

const addPost = props => {

    const { cancel } = props

    return (
        <div id="addPost">
            <div className="header">
                <h1>Add Post</h1>
            </div>
            <div className="content">
                <AddForm cancel={cancel} />
            </div>
        </div>
    )
}

const mapStateToProps = ({ addPost }) => ({
    posts: addPost.formData
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            cancel: () => push('/')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(addPost)
