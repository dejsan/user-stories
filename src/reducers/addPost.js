import * as constants from './constants';

export const REQUEST_ADD_POST = 'addPost/REQUEST_ADD_POST'
export const SUCCESSFUL_ADD_POST = 'addPost/SUCCESSFUL_ADD_POST'
export const RESET_STATE = 'addPost/RESET_STATE'

const initialState = {
    isRequestingAddPost: false,
    isAddPostSuccessful: false
}

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ADD_POST:
            return {
                ...state,
                isRequestingAddPost: true,
                isAddPostSuccessful: false
            }

        case SUCCESSFUL_ADD_POST:
            return {
                ...state,
                isRequestingAddPost: false,
                isAddPostSuccessful: true
            }

        case RESET_STATE:
            return {
                ...state,
                isRequestingAddPost: false,
                isAddPostSuccessful: false
            }

        default:
            return state
    }
}

// Actions
const successfulAddPost = () => {
    return dispatch => {
        dispatch({
            type: SUCCESSFUL_ADD_POST
        })
    }
}

export const resetAddFormState = () => {
    return dispatch => {
        dispatch({
            type: RESET_STATE
        })
    }
}

export const requestAddPost = (postData) => {
    return dispatch => {
        dispatch({ type: REQUEST_ADD_POST })
        return fetch(constants.API_URL + constants.API_KEY, 
                    {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: postData
                    }
                )
                .then(response => response.json())
                .then(json => {
                    document.getElementById("addForm").reset();
                    dispatch(successfulAddPost())
                })
                .catch(err => dispatch({ type: 'addPost/FAIL_ADD_POST', error: err })) 
                
    }
}