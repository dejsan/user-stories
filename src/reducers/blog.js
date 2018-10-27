import * as constants from './constants';

export const RECEIVE_POSTS  = 'blog/RECEIVE_POSTS '
export const REQUEST_POSTS = 'blog/REQUEST_POSTS'
export const CLEAR_TABLE = 'blog/CLEAR_TABLE'
export const DELETE_POST = 'blog/DELETE_POST'
export const REQUEST_DELETE_POST = 'blog/REQUEST_DELETE_POST'

const initialState = {
    posts: [],
    isRequestingPosts: false,
    isRequestingDeletePost: false        
}

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isRequestingPosts: true
            }

        case RECEIVE_POSTS:
            return {
                ...state,
                posts: action.posts,
                isRequestingPosts: false
            }
        case CLEAR_TABLE:
            return {
                ...state,
                posts: []
            }

        case REQUEST_DELETE_POST:
            return {
                ...state,
                isRequestingDeletePost: true
            }

        case DELETE_POST:
            return {
                ...state,
                isRequestingDeletePost: false
            }

        default:
            return state
    }
}

// Actions
const recievePosts = (posts) => {
    return dispatch => {
        dispatch({
            type: RECEIVE_POSTS,
            posts: posts
        })
    }
}

export const requestPosts = () => {
    return dispatch => {
        dispatch({ type: REQUEST_POSTS })
        dispatch({ type: CLEAR_TABLE })
        return fetch(constants.API_URL + constants.API_KEY, {method: "GET"})
                .then(response => response.json())
                .then(json => dispatch(recievePosts(json)))
                .catch(err => dispatch({ type: 'blog/FAIL_RECIEVE_POSTS', error: err })) 
    }
}

const deletePost = (postId) => {
    return dispatch => {
        dispatch({
            type: DELETE_POST,
            postId: postId
        })
        return dispatch(requestPosts())
    }
}

export const requestDeletePost = (postId) => {
    return dispatch => {
        dispatch({
            type: REQUEST_DELETE_POST
        })

        return fetch(constants.API_URL + '/' + postId + constants.API_KEY, {method: "DELETE"})
                .then(response => response.json())
                .then(json => dispatch(deletePost(postId)))
                .catch(err => dispatch({ type: 'blog/FAIL_RECIEVE_POSTS', error: err }))
    }
}
