import React, { Component } from 'react'
import { Table, Tag, Button } from 'antd'
import axios from 'axios'

export default class Roles extends Component {

    state = {
        dataSource: []
    }

    columns = [
        {
            title: '角色名称',
            dataIndex: 'roleName', //自动对每一项数据 访问  .id 属性
            render: (a) => {
                //   console.log(id)
                return <b>{a}</b>
            } //定制每一列的样式
        },
        {
            title: '操作',
            render: (item) => {
                // console.log(item.id)
                return <div>
                    <Button danger onClick={()=>this.handleDelete(item.id)} disabled>删除</Button>
                    <Button type="primary" onClick={()=>this.handleUpdate(item.id)}>更新</Button>
                </div>
            }
        }
    ];

    handleDelete = (id) => {

    }

    handleUpdate = () => {

    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource} columns={this.columns}
                    // rowKey接收一个回调函数，可以设置表格的key值（回调函数的返回值）
                    rowKey={item=>item.id}
                    pagination={
                        { pageSize: 5 }
                    } //分页    

                    //可展开
                    expandable={{
                        expandedRowRender: item => {
                            // console.log(item)
                            return item.roleRight.map(a=>
                                <div key={a.category}>
                                    <b>{a.category}</b>
                                    {a.list.map(b=><Tag color="green" key={b} closable>{b}</Tag>)}
                                </div>
                            )
                        }
                    }}
                />
            </div>
        )
    }

    componentDidMount() {
        axios.get("http://localhost:5000/roles").then(res => {
            // console.log(res.data)      
            this.setState({
                dataSource: res.data
            })
        })
    }

}
