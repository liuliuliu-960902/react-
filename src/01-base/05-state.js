import React, { Component } from 'react'

export default class App extends Component {


    // data(){ return {name:"kerwin"} }

    state = {
        myname:"kerwin",
        myage:100
    }

    render() {
        return (
            <div>
                {this.state.myname}----{this.state.myage}
                <button onClick={this.handleChange}>change</button>
            </div>
        )
    }

    handleChange = ()=>{
        // this.state.myname ="xiaomng" 不能直接修改状态

        // 唯一改变状态的方法
        this.setState({
            myname:"xiaoming",
            myage:18
        })

        // this.setState({
        //     myage:18
        // })
    }
}
