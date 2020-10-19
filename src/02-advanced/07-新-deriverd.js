import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:"kerwin",
        myage:100
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        // console.log(state)  
        return {
            myname:state.myname.substring(0,1).toUpperCase()+state.myname.substring(1)
        }
    }

    // 初始化， 自身更新， 父子更新

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myname:"xiaoming"
                    })
                }}>click</button>
                app--{this.state.myname}-{this.state.myage}
            </div>
        )
    }
}
