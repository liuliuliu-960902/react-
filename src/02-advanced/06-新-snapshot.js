import React, { Component } from 'react'

export default class App extends Component {
    render() {
        console.log("render")
        return (
            <div>
                app-<button onClick={()=>{
                    this.setState({})
                }}>click</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate-记录滚动条的位置")
        var scrollPosition = 100
        return scrollPosition
    }

    componentDidUpdate(prevProps,prevState,data){
        console.log("componentDidUpdate-利用记录的位置,重新确定滚动条的位置--",data)
    }
}
