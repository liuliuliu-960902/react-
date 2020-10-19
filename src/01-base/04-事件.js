import React, { Component } from 'react'

export default class App extends Component {

    myname="kerwin" //this.访问 "全局"
    myage=100
    myref=React.createRef()

    render() {
        // console.log(this)
        // var myname="dwadwa" //临时遍历
        return (
            <div>
                <input type="text" ref={this.myref}/>
                <input type="text" ref="mytext"/>
                {/* <input type="password" ref="mytext"/> */}
                <button onClick={
                    ()=>{
                        // console.log(this)
                        console.log("11111",this.refs.mytext.value)
                        console.log("11111",this.myref.current.value)
                    }
                }>add1111</button>

                <button onClick={this.handleMyClick2.bind(this,'kerwin')}>add2222</button>

                <button onClick= {this.handleMyClick3}>add3333</button>

                <button onClick={()=>{
                    this.handleMyClick2("kerwim")
                    this.handleMyClick3("xiaomonig")
                }}>add444</button>

            </div>
        )
    }

    handleMyClick2(data){
        // console.log(this.myname,this.myage)
        console.log("handleMyClick",this.refs.mytext.value,data)
    }

    handleMyClick3 = () => {
        console.log("handleMyClick",this.refs.mytext.value)
    }
}
//call apply bind

// call apply 改变this指向之后 会立即执行
// bind  改变this指向之后 会手动（） 执行