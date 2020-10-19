import React, { Component } from 'react'

class Child extends Component{
    state = {

    }

    render(){
        return <div style={{background:'yellow'}}>child</div>
    }

    //更新阶段调用 
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate","判断新老属性对比， 新老状态对比，都没有改变，return false")

        if(JSON.stringify(nextProps)===JSON.stringify(this.props) && JSON.stringify(nextState)===JSON.stringify(this.state)){
            return false
        }
        return true
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    
}

export default class App extends Component {
    render() {
        return (
            <div>
                app-<button onClick={()=>{
                    this.setState({})
                }}>app-click</button>
                <Child/>
            </div>
        )
    }

    // scu
}
