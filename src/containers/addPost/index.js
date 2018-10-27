import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    resetAddFormState,
    requestAddPost
} from '../../reducers/addPost'
import AddForm from './components/addForm'
import './style.css'

class AddPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { resetAddFormState, goToBlog, requestAddPost, isRequestingAddPost, isAddPostSuccessful } = this.props

        return (
            <div id="addPost">
                <div className="header">
                    <h1>Add Post</h1>
                </div>
                <div className="content">
                    <AddForm
                        resetAddFormState={resetAddFormState}
                        goToBlog={goToBlog}
                        requestAddPost={requestAddPost}
                        isRequestingAddPost={isRequestingAddPost}
                        isAddPostSuccessful={isAddPostSuccessful}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ addPost }) => ({
    isRequestingAddPost: addPost.isRequestingAddPost,
    isAddPostSuccessful: addPost.isAddPostSuccessful
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAddPost,
            resetAddFormState,
            goToBlog: () => push('/')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost)
