const initialState = '';

export default function search(state=initialState, action) {
    if (action.type === 'SEARCH') {
        return action.payload
    }
    return state
}