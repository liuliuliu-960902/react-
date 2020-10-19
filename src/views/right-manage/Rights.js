import React, { Component } from 'react'
import { Table, Tag, Button } from 'antd'
import axios from 'axios'
// import store from '../../redux'
import {getList} from '../../redux/actionCreator/GetList'
import {connect} from 'react-redux'
class Rights extends Component {

    columns = [
        {
            title: '#',
            dataIndex: 'id', //自动对每一项数据 访问  .id 属性
            render: (id) => {
                //   console.log(id)
                return <b>{id}</b>
            } //定制每一列的样式
        },
        {
            title: '权限名称',
            dataIndex: 'title',
        },
        {
            title: '权限等级',
            dataIndex: 'grade',
            render: (grade) => {
                let arr = ["green", "orange", "red"]
                return <Tag color={arr[grade - 1]}>{grade}</Tag>
            }
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
        console.log("delete",id)
        //删掉当前页面数据

        this.setState({
            dataSource:this.state.dataSource.filter(item=>item.id!==id)
        })
        //同步后端

        axios.delete(`http://localhost:5000/rights/${id}`)
    }

    handleUpdate = () => {

    }

    render() {
        return (
            <div>
                <Table dataSource={this.props.kerwinlist} columns={this.columns}
                    // rowKey接收一个回调函数，可以设置表格的key值（回调函数的返回值）
                    // rowKey={item=>item.name1}
                    pagination={
                        { pageSize: 5 }
                    } //分页    
                />
            </div>
        )
    }

    componentDidMount() {
        if(this.props.kerwinlist.length===0){
            // store.dispatch(getList()) //除了支持普通对象， 还需要支持特殊对象Promise
            this.props.kerwingetlist()
        }else{
            console.log("缓存")
        }

    }
}


const mapStateToProps= (state)=>{
    return {
        kerwinlist:state.ListReducer.list
    }
}
const mapDispatchToProps= {
    kerwingetlist:getList
}

export default connect(mapStateToProps,mapDispatchToProps)(Rights)