import React, { Component } from 'react'

export default class App extends Component {

    state = {
        datalist:["1111","2222","3333"]
    }

    render() {
        return (
            <div>
                <input type="text" ref="mytext"/>
                <button onClick={this.handleAdd}>add</button>

                <ul>
                    {/* v-for  vue*/}

                    {
                        this.state.datalist.map((item,index)=>
                          <li key={item}>
                              {item}
                              <button onClick={
                                  ()=>this.handleDel(index)
                              }>del</button>
                          </li>
                        )
                    }

                </ul>
            </div>
        )
    }

    handleDel = (index)=>{
        console.log("del",index)

        // this.state.datalist.splice(index,1)

        // 不要修改原状态

        var newState = [...this.state.datalist]
        newState.splice(index,1)

        this.setState({
            datalist:newState
        })

        // console.log(this.state.datalist)
    }

    handleAdd = ()=>{
        console.log(this.refs.mytext.value)

        // 不要修改原状态
        this.setState({
            datalist:[...this.state.datalist,this.refs.mytext.value]
        })
    }
}

var arr = ["1111","222","33333"]

//map

var newarr = arr.map(item=>`<li>${item}</li>`)
console.log(newarr.join(""))