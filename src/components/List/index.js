import React,{Component} from 'react'
import store from '@store'

export default class List extends Component{
    constructor() {
        super()
        this.state = store.getState().List

        store.subscribe(this.udpateView.bind(this))
    }
    render() {
        let {list} = this.state
        return(
            <div>
               {
                   list.map((item, index) => (
                       <li key={index}>
                           {item}
                           <button onClick={this.delIndexArr.bind(this, index)}>删除</button>
                       </li>
                   ))
               }
            </div>
        )
    }

    delIndexArr(index) {
        let action = {
            type: 'DEL_VAL_ARR',
            val: index
        }
        store.dispatch(action)
    }

    udpateView() {
        this.setState(store.getState().List)
    }
} 