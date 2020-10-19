import React, { Component } from 'react'

// Input 组件
class Filed extends Component{

    state = {
        value:"aaaaa"
    }
    static defaultProps = {
        bg:"yellow",
        type:"text"
    }

    resetFiled(){
        this.setState({
            value:""
        })
    }

    render(){
        return <div>
            <label>{this.props.title}</label>
            <input type={this.props.type} style={{background:this.props.bg}} onChange={(ev)=>{
                this.setState({
                    value:ev.target.value
                })
            }} value={this.state.value}/>
        </div>
    }
}

// 1. 记录input的value
// 2. 传给父组件

export default class App extends Component {
    render() {
        return (
            <div>
                <Filed title="用户名" ref="username"/>
                <Filed bg="red" type="password" title="密码" ref="password"/>

                <button onClick={this.handleLogin}>登录</button>
                <button onClick={this.reset}>重置</button>
            </div>
        )
    }

    handleLogin = ()=>{
        console.log("登录",this.refs.username.state.value,this.refs.password.state.value)
    }

    reset = ()=>{
        console.log("重置")
        this.refs.username.resetFiled()
        this.refs.password.resetFiled()
    }
}
// 受控组件 