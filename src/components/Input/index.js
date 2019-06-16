import React,{Component} from 'react'
import store from '@store'

export default class Input extends Component{
    constructor() {
        super()
        this.state = store.getState().List

        store.subscribe(this.updateView.bind(this))
    }
    render() {
        let {val} = this.state
        return(
            <div>
                <input value={val} onChange={this.valBind.bind(this)}/>
                <button onClick={this.addValToArr.bind(this)}>添加</button>
                
            </div>
        )
    }
    valBind(e) {
        let action = {
            type: 'VALBIND',
            val: e.target.value
        }
        store.dispatch(action)
    }
    addValToArr() {
        let action = {
            type: 'VAL_TO_ARR'
        }
        store.dispatch(action)
    }

    // 修改视图
    updateView() {
        
        this.setState(store.getState().List)
    }
} 