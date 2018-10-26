export const INCREMENT_REQUESTED = 'blog/INCREMENT_REQUESTED'
export const INCREMENT = 'blog/INCREMENT'
export const DECREMENT_REQUESTED = 'blog/DECREMENT_REQUESTED'
export const DECREMENT = 'blog/DECREMENT'

const initialState = {
    posts: [
        {
            id: 1, 
            title: 'Bought cool game', 
            categorie:'Games'
        }, 
        {
            id: 2, 
            title: 'Great movie night', 
            categorie:'Movies' 
        }, 
        {
            id: 3, 
            title: 'Banana cake', 
            categorie:'Food' 
        }
    ],
    count: 0,
    isIncrementing: false,
    isDecrementing: false
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

        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
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

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        dispatch({
            type: DECREMENT
        })
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
            type: DECREMENT
            })
        }, 3000)
    }
}
