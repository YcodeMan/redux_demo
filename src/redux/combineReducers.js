
const combineReducers = (reducres) => {
    
    let newState = {}
    
    return (state, action) => {
        for (let key in reducres) {
            newState[key] = reducres[key](state[key], action)
        }
        return newState
    }
}

export default combineReducers