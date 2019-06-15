import React from "react";
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
    <App/>,
    document.getElementById('app'),
    () => {
        console.log('挂载成功')
    }
)