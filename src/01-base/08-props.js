import React, { Component } from 'react'
import kerwinProp from 'prop-types'//自带的

// console.log(kerwinProp)
class Navbar extends Component{
    // props:["mytitle"]

    /*
        props:{
            mytitle:String,
            myshow:Boolean
        }
    */

    //属性验证
    static propTypes={
        mytitle:kerwinProp.string,
        myshow:kerwinProp.bool
    }

    //默认属性
    static defaultProps={
        mytitle:"",
        myshow:true
    }

    render(){
        // console.log(this.props)
        return <div>
            {/* {
                10>20?<div>11111</div>:<div>222222</div>
            } */}

            {
                this.props.myshow?
                <button>返回</button>
                :
                null
            }
            <span>{this.props.mytitle}</span>
            {
                this.props.myshow?
                <button>首页</button>
                :
                null
            }
        </div>
    }
}
//属性验证
// Navbar.propTypes={
//     mytitle:kerwinProp.string,
//     myshow:kerwinProp.bool
// }



export default class App extends Component {
    render() {
        return (
            <div>
                app
                <Navbar mytitle="home" myshow={false}/>
                <Navbar mytitle="list"/>
                <Navbar mytitle="shopcar"/>
            </div>
        )
    }
}
