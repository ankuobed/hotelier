export const initialState = {
    user: {}
}

export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'DELETE_USER':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}