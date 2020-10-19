import React, { Component } from 'react'
import './css/index.css' //css-loader style-loader
export default class App extends Component {
    render() {
        var obj = {
            backgroundColor:"red"
        }

        return (
            <div >
                <div style={obj}>111111111111</div>
                <div style={ {backgroundColor:"yellow"} }>22222222222222222</div>
                <div className="active">333333333333333333</div>

                <label htmlFor="myinput">用户名</label>
                <input id="myinput"/>
            </div>

        )
    }
}

