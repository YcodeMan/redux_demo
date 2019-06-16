import React,{Component} from 'react'
import Input from '@components/Input'
import List from '@components/List'
import store from '@store'
export default class App extends Component{
    constructor() {
        super()
        this.state = store.getState().Input
        
       store.subscribe(this.updateView.bind(this))
    }
    render() {
        let {n} = this.state
        return(
            <div>
                {n}<br/>
                <button onClick={this.addNum.bind(this)}>自增</button>
                <hr/>
                <Input/>
                <List/>
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
        this.setState(store.getState().Input)
    }

}