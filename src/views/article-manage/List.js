import React, { Component } from 'react'
import { Table, Button } from 'antd'
import axios from 'axios'

export default class List extends Component {

    state = {
        dataSource: []
    }

    columns = [
        {
            title: '文章标题',
            dataIndex: 'title', //自动对每一项数据 访问  .id 属性
            render: (id) => {
                //   console.log(id)
                return <b>{id}</b>
            } //定制每一列的样式
        },
        {
            title: '文章作者',
            dataIndex: 'author',
        },
        {
            title: '文章分类',
            dataIndex: 'category',
            render: (category) => {
                return category.join('/')
            }
        },
        {
            title: '操作',
            render: (item) => {
                    return <div>
                    <Button  onClick={()=>this.handlePreview(item.id)} >预览</Button>
                    <Button danger onClick={()=>this.handleDelete(item.id)} >删除</Button>
                    <Button type="primary" onClick={()=>this.handleUpdate(item.id)}>更新</Button>
                </div>
            }
        }
    ];
    //删除
    handleDelete = (id) => {
        console.log("delete",id)
        //删掉当前页面数据

        this.setState({
            dataSource:this.state.dataSource.filter(item=>item.id!==id)
        })

        axios.delete(`http://localhost:5000/articles/${id}`)
    }
    //更新
    handleUpdate = (id) => {
        this.props.history.push(`/article-manage/update/${id}`)
    }
    //预览
    handlePreview = (id)=>{
        this.props.history.push(`/article-manage/preview/${id}`)
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>{
                    this.props.history.push(`/article-manage/create`)
                }}>创建文章</Button>
                <Table dataSource={this.state.dataSource} columns={this.columns}
                    // rowKey接收一个回调函数，可以设置表格的key值（回调函数的返回值）
                    rowKey={item=>item.id}
                    pagination={
                        { pageSize: 5 }
                    } //分页    
                />
            </div>
        )
    }

    componentDidMount() {
        let {username} = JSON.parse(localStorage.getItem("token"))
        axios.get(`http://localhost:5000/articles?author=${username}`).then(res => {
            console.log(res.data)      
            this.setState({
                dataSource: res.data
            })
        })
    }

}
