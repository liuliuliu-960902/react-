import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div style={{background:"yellow"}}>
            child --{this.props.children}
        </div>
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>
                        111111
                    </div>
                </Child>
            </div>
        )
    }
}
