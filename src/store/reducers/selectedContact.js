const initialState = {
    stateSelect: null,
    isShowDetails: false
};

export default function selectedContact(state=initialState, action) {
    if (action.type === 'SELECTED'){
        return {stateSelect: action.payload, isShowDetails: true}
    }
    return state
}