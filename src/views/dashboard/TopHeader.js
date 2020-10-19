import React, { Component } from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';

import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import { Menu, Dropdown,Avatar } from 'antd';
// import store from '../../redux';
import { CollApsed } from '../../redux/actionCreator/CollApsed';


const { Header } = Layout;

class TopHeader extends Component {
    state = {
        collapsed: false
    }
    render() {
        try {
            var {username,roleName} = JSON.parse(localStorage.getItem("token"))    //从localStorage 取出roleType
        } catch (error) {
            this.props.history.replace("/login")
        }

        const menu = (
            <Menu>
                <Menu.Item>
                   {roleName}
                </Menu.Item>
                <Menu.Item danger onClick={()=>{
                   localStorage.removeItem("token")
                   this.props.history.replace("/login") 
                }}>
                   退出 
                </Menu.Item>
            </Menu>
        )
        return (
            <Header className="site-layout-background" style={{ padding: '0 16px' }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}


                {/* {
                    //jsx , 
                    this.state.collapsed?
                    <MenuUnfoldOutlined className= 'trigger' onClick={this.toggle}/>
                    :
                    <MenuFoldOutlined className= 'trigger' onClick={this.toggle}/>
                } */}

                <div style={{ float: 'right' }}>
                    欢迎{username}回来

                    <Dropdown overlay={menu}>
                         <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </Header>
        )
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })

        //发布者
        this.props.kerwinCollApsed()
    }
}

export default withRouter(connect(null,{
    kerwinCollApsed:CollApsed
})(TopHeader)) 