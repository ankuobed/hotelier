export const initialState = {
    username: ''
}

export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
               username: action.username
            }
        case 'DELETE_USER':
            return {
                ...state,
                username: ''
            }
        default:
            return state
    }
}