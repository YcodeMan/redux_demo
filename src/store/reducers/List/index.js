

const defaultState = {
    val: '',
    list: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case 'VALBIND':
            let valBindState = JSON.parse(JSON.stringify(state))
            valBindState.val = action.val
            return valBindState
        case 'VAL_TO_ARR':
            let arrState = JSON.parse(JSON.stringify(state))
            arrState.list.push(arrState.val)
            arrState.val = ''
            return arrState
        case 'DEL_VAL_ARR':
            let newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.val, 1) 
            return newState      
    }
    return state
}