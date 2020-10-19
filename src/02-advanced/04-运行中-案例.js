import React, { Component } from 'react'
import './css/index.css'
export default class App extends Component {

    state = {
        categoryList:[
            {
                id:111,
                title:"手机"
            },
            {
                id:222,
                title:"衣服"
            },
            {
                id:333,
                title:"鞋"
            }
        ],
        current:0,

        id:111
    }

    render() {
        return (
            <div>
                <h2>分类页面</h2>

                <ul style={{display:"flex",justifyContent:"space-around"}}>
                    {
                        this.state.categoryList.map( (item,index)=>
                        <li key={item.id} className={this.state.current===index?'active':''} onClick={this.handleItemClick.bind(this,index)}>{item.title}</li>    
                        )
                    }
                </ul>

                <List myid={this.state.id}/>
            </div>
        )
    }

    handleItemClick(index){
        // console.log(index)
        this.setState({
            current:index,
            id:this.state.categoryList[index].id
        })
    }
}


class List extends Component{

    componentDidMount() {
        console.log(`利用获取的id--${this.props.myid} 发ajax请求数据`)
    }
    

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(`利用获取的id--${nextProps.myid} 发ajax请求数据`)
    }

    render(){
        return <div>
            列表如下：
            {/* <div>{this.props.myid}</div> */}
        </div>
    }
}