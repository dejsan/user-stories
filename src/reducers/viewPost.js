export const INCREMENT_REQUESTED = 'viewPost/INCREMENT_REQUESTED'
export const INCREMENT = 'viewPost/INCREMENT'

const initialState = {
    postData: {
        id: 1,
        title: 'Bought cool game',
        categorie: 'Games',
        content: 'Nulla arcu arcu, vehicula semper mauris sit amet, luctus porttitor tellus. Donec sit amet sagittis ante, rhoncus bibendum orci. Mauris augue odio, hendrerit pretium mi eget, lacinia iaculis enim. Proin eget tortor dapibus, gravida augue a, pharetra diam. In sed erat sit amet felis tempus hendrerit. Sed elit massa, fringilla at elementum quis, pulvinar at ex. Curabitur porta auctor volutpat. Vestibulum dapibus lacus sit amet tortor dignissim egestas. Nunc risus eros, molestie a odio vitae, elementum mollis quam. Donec vehicula sit amet metus vitae consequat. Maecenas tempor erat turpis, vitae tristique ipsum ultricies vitae. Fusce pulvinar tincidunt pellentesque. Quisque malesuada malesuada dui ac molestie. Donec tristique a libero eu auctor. Quisque luctus sapien dolor, ac aliquet purus suscipit at.'
    }
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