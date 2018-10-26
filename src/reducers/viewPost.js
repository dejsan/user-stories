import * as constants from './constants';

export const REQUEST_POST = 'viewPost/REQUEST_POST'
export const RECEIVE_POST = 'viewPost/RECEIVE_POST'

const initialState = {
    postData: {},
    isRequestingPost: false
}

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POST:
            return {
                ...state,
                isRequestingPost: true
            }

        case RECEIVE_POST:
            return {
                ...state,
                postData: action.postData,
                isRequestingPost: false
            }

        default:
            return state
    }
}

// Actions
const recievePost = (postData) => {
    return dispatch => {
        dispatch({
            type: RECEIVE_POST,
            postData: postData
        })
    }
}

export const requestPost = (postId) => {
    return dispatch => {
        dispatch({ type: REQUEST_POST })
        return setTimeout(() => { 
                    fetch(constants.API_URL + '/' + postId + constants.API_KEY, {method: "GET"})
                        .then(response => response.json())
                        .then(json => dispatch(recievePost(json)))
                        .catch(err => dispatch({ type: 'viewPost/FAIL_RECIEVE_POSTS', error: err })) 
                }, 500)
    }
}