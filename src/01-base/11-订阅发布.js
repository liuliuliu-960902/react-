import React, { Component } from 'react'
// redux 原理 订阅发布
const store = {
    list:[], //收集所有的订阅者的 回调函数，
    subscribe(callback){
        // console.log(callback)

        this.list.push(callback)
    },//订阅
    dispatch(data){
        this.list.forEach(callback=>{
            // console.log(callback)

            callback(data)
        })
    }//发布
}

class WeixinUser extends Component{

    componentDidMount(){
        //生命周期 - dom已经创建完成
        console.log("componentDidMount")
        
        store.subscribe((data)=>{
            console.log("user定义的回调函数",data)
        })
    }
    
    render(){
        return <div style={{background:'yellow'}}>
            我是订阅者
        </div>
    }
}

class WeixinAuthor extends Component{
    render(){
        return <div style={{background:'red'}}>
            我是发布者-<button onClick={()=>{
                store.dispatch("来自公众号作者的问候")
            }}>发布文章</button>
        </div>
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <WeixinUser/>
                <WeixinAuthor/>
            </div>
        )
    }
}
