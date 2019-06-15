import React,{Component} from 'react'
import store from '@store'
export default class App extends Component{
    constructor() {
        super()
        this.state = store.getState()
       store.subscribe(this.updateView.bind(this))
    }
    render() {
        let {n} = this.state
        return(
            <div>
                {n}<br/>
                <button onClick={this.addNum.bind(this)}>自增</button>
            </div>
        )
    }
    addNum() {
        let action = {
            type: 'ADD_NUM'
        }
        store.dispatch(action)
    }

    // 更新视图
    updateView() {  
        this.setState(store.getState())
    }

}