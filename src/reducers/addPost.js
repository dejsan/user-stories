import * as constants from './constants';

export const INCREMENT_REQUESTED = 'addPost/INCREMENT_REQUESTED'
export const INCREMENT = 'addPost/INCREMENT'

const initialState = {
    formData: {}
}

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        default:
            return state
    }
}

// Actions
export const increment = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        dispatch({
            type: INCREMENT
        })
    }
}

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
            type: INCREMENT
            })
        }, 3000)
    }
}