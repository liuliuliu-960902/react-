import React, { Component } from 'react'

// Input 组件
class Filed extends Component{

    static defaultProps = {
        bg:"yellow",
        type:"text"
    }
    render(){
        return <div>
            <label>{this.props.title}</label>
            <input type={this.props.type} style={{background:this.props.bg}} onChange={(ev)=>{
                // console.log("input",ev.target.value)
                // 子传父 --callback回调
                this.props.event(ev.target.value)
            }} value={this.props.value}/>
        </div>
    }
}

// 1. 记录input的value
// 2. 传给父组件

export default class App extends Component {
    state = {
        username:"admin",
        password:"123"
    }

    render() {
        return (
            <div>
                <Filed title="用户名" event={
                    (data)=>{
                        // console.log('用户名',data)
                        this.setState({
                            username:data
                        })
                    }
                }  value={this.state.username}/>
                <Filed bg="red" type="password" title="密码" event={
                    (data)=>{
                        // console.log('密码',data)
                        this.setState({
                            password:data
                        })
                    }
                }  value={this.state.password}/>

                <button onClick={this.handleLogin}>登录</button>
                <button onClick={this.reset}>重置</button>
            </div>
        )
    }

    handleLogin = ()=>{
        console.log("登录",this.state.username,this.state.password)
    }

    reset = ()=>{
        console.log("重置")

        this.setState({
            username:"",
            password:""
        })
    }
}
// 受控组件 