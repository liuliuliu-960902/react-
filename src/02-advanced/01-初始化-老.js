import React, { Component } from 'react'

export default class App extends Component {
    render() {
        console.log("render")
        return (
            <div>
                app
            </div>
        )
    }
    
    UNSAFE_componentWillMount(){
        console.log("componentWillMount","可能因为调度任务，触发多次")
    }

    componentDidMount(){
        console.log("componentDidMount","订阅函数，访问dom，ajax, setInterval...")
    }
}

/*
    16.2 之后，React Fiber(纤维)，调度算法。
*/