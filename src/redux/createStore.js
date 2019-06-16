import ActionType from './actionType'

const  createStore = (reducer) => {

    // 定义state对象
    let state = {}
    
    // 事件订阅
    let evevtListener = []


    let getState = () => state
    
    let subscribe = (cb) => {
        evevtListener.push(cb)
    }

    let dispatch = (action=ActionType) => {
        
       state =  reducer(state, action)
        
        
        evevtListener.map((cb) => {
            cb()
        })
    }
    // 默认派发一次
    dispatch()

    return {
        getState,
        dispatch,
        subscribe

    }

}

export default createStore