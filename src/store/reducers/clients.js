import clientsList from '../clients'

const initialState = clientsList;

export default function clients(state=initialState, action) {
    if (action.type === 'SEARCH'){
        return state
    }
    return state
}