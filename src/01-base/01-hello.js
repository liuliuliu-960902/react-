//1- class
import React from 'react'


class Child extends React.Component{
    render(){
        return (
            <div>
                child
                <div>aaaaaaaaaaaa</div>
            </div>
        )
    }
}

class App extends React.Component{
    //返回值是什么 就渲染什么
    render(){
        return <div>
            hello component111

            <Child/>
            <NavBar/>
        </div>
    }
}

export default App

//2- function

function NavBar(props){
    return <div>
        {/* <button>back</button> */}
        nav
        {/* <button>home</button> */}
    </div>
}
// 16.8之前  function 组件 不支持 状态， 生命周期， 支持属性
// 16.8之后  react hooks ,状态 useState ,副作用函数。
//