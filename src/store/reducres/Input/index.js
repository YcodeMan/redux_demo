

const defaultState = {
    n: 0
}


export default  (state=defaultState, action) => {
    
    switch(action.type) {
        case 'ADD_NUM':
            let newstate = JSON.parse(JSON.stringify(state))
            newstate.n++
            return newstate
    }
    return state
}