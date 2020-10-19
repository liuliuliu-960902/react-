import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state = {
        myname:"kerwin"
    }
    
    render() {
        console.log("render")
        return (
            <div>
                app-{this.state.myname}
                <button onClick={()=>{
                    this.setState({
                        myname:"xiaoming"
                    })
                }}>change</button>

            </div>    
        )
    }

    UNSAFE_componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    //nextProps 父子关系， 新的属性
    //nextState 当前组件的新状态
    // shouldComponentUpdate(nextProps,nextState){
    //         // 性能调优函数
    //         console.log("shouldComponentUpdate",this.state,nextState)

    //         if(JSON.stringify(this.state)===JSON.stringify(nextState)){
    //             return false
    //         }
    //         return true
    // }

    

    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate","获取更新后的dom")
    }
}

// 