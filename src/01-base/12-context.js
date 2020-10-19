import React, { Component } from 'react'
const GlobalContext = React.createContext() //创建context对象
// GlobalContext.Provider
// GlobalContext.Consumer

class Child111 extends Component{
    render(){
        return <GlobalContext.Consumer>
            {
                (value)=>{
                    return <div>child1-孩子-{value.mytext}</div>
                }
            }
        </GlobalContext.Consumer>
    }
}

class Child1 extends Component{
    render(){
        return <GlobalContext.Consumer>
            {
                (value)=>{
                    return <div style={{background:"yellow"}}>
                        child1 --{value.call} --{value.sms}-{value.mytext}
                        -<button onClick={()=>{
                            // value.mytext = "2222222222222"
                            // console.log(value)

                            value.handleChange("来自child1的问候")
                        }}>child1-button</button>

                        <Child111></Child111>
                    </div>
                }
            }
        </GlobalContext.Consumer>
    }
}

class Child2 extends Component{
    render(){
        return <GlobalContext.Consumer>
            {
                (value)=>{
                    return <div style={{background:"red"}}>
                        child2-{value.call}--{value.sms}--{value.mytext}
                    </div>
                }
            }
        </GlobalContext.Consumer>
    }
}


export default class App extends Component {


    state = {
        mytext:"111111111111111111111"
    }

    render() {
        return (
            <GlobalContext.Provider value={
                {
                    call:"打电话",
                    sms:"短信服务",
                    mytext:this.state.mytext,
                    handleChange:this.handleChange
                }
            }>
                <div>
                    app--<button onClick={this.handleChange}>app-change</button>
                    <Child1></Child1>

                    <Child2></Child2>
                </div>
            </GlobalContext.Provider>
        )
    }

    handleChange = (data)=>{
        this.setState({
            mytext:data
        })
    }
}
