import React, { Component } from 'react'


class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            navbar--{this.props.children}-{this.props.children}
        </div>
    }
}


class SideBar extends Component{
    render(){
        return <div style={{width:'200px',background:'yellow'}}>
            sidebar
            <ul>
                <li>11111</li>
                <li>22222</li>
                <li>33333</li>
            </ul>
        </div>
    }
}


export default class App extends Component {

    state = {
        isShow:false
    }
    render() {
        return (
            <div>
                <Navbar>
                    <button onClick={()=>{
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}>show/hide</button>
                </Navbar>
                {
                    this.state.isShow?
                    <SideBar></SideBar>
                    :
                    null
                }
            </div>
        )
    }
}
