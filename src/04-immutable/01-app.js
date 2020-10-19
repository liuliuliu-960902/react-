import React, { Component } from 'react'
import {fromJS} from 'immutable'
export default class App extends Component {
    state = {
        obj:{
            a:[1,2,3],
            b:{
                b1:["111","222","333"]
            },
            c:{
                c1:"c1-data"
            },
            d:undefined
        }
    }
    render() {
        return (
            <div>
                app-<button onClick={this.handleClick}>change</button>
                {
                    this.state.obj.b.b1.map( (item,index)=>
                        <li key={index}>{item}</li>    
                    )
                }

                {
                    this.state.obj.a.map( (item,index)=>
                        <li key={index}>{item}</li>    
                    )
                }

                {this.state.obj.c.c1}
            </div>
        )
    }

    handleClick = ()=>{
        
        // 1- 转化成immutable

        let oldimmutable = fromJS(this.state.obj)

        // 获取 
        // console.log(oldimmutable.getIn(["b","b1",1]))

        // 2- 修改生成成新的immutable

        let newimmutable = oldimmutable.setIn(["b","b1",1],"kerwin").setIn(["c","c1"],"c1-修改")
        // console.log(newimmutable,this.state.obj)


        // 3- 新的immutable ==>新的普通对象
        let newobj = newimmutable.toJS()
        // console.log(newimmutable.toJS(),this.state.obj)
        this.setState({
            obj:newobj
        })
    }
}
