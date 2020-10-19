import React, { Component } from 'react'
import TopHeader from './TopHeader'
import SideMenu from './SideMenu'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from '../home/Home'
import Roles from '../right-manage/Roles'
import List from '../article-manage/List'
import Rights from '../right-manage/Rights'
import Category from '../article-manage/Category'
import Users from '../user-manage/Users'
import NotFound from '../error/NotFound'

import { Layout } from 'antd'
import './DashBoard.css'
import Create from '../article-manage/Create'
import Update from '../article-manage/Update'
import Preview from '../article-manage/Preview'

import store from '../../mobx/store'
import {autorun} from 'mobx'
const { Content } = Layout;

const routes = [
    {
        path:"/home",
        component: Home,
        permission:[1,2,3]
    },
    {
        path:"/user-manage/users",
        component: Users,
        permission:[3]
    },
    {
        path:"/right-manage/roles",
        component: Roles ,
        permission:[3]
    },
    {
        path:"/right-manage/rights",
        component: Rights  ,
        permission:[3]
    },
    {
        path:"/article-manage/list",
        component: List ,
        permission:[1,2,3] 
    },
    {
        path:"/article-manage/create",
        component: Create ,
        permission:[1,2,3] 
    },
    {
        path:"/article-manage/preview/:myid",
        component: Preview ,
        permission:[1,2,3] 
    },
    {
        path:"/article-manage/update/:myid", //动态路由
        component: Update ,
        permission:[1,2,3] 
    },
    {
        path:"/article-manage/category",
        component: Category,
        permission:[2,3]  
    }
]

export default class DashBoard extends Component {

    state = {
        isFullScreen:store.get("isFullScreen")
    }
    componentDidMount() {
        this.cancel = autorun(()=>{
            // console.log("dashborad---",store.get("isFullScreen"))

            this.setState({
                isFullScreen:store.get("isFullScreen")
            })
        })
    }

    componentWillUnmount(){
        this.cancel() //取消autorun
    }
    

    render() {
        try {
            var {roleType} = JSON.parse(localStorage.getItem("token"))    //从localStorage 取出roleType
        } catch (error) {
            this.props.history.replace("/login")
        }

        return (
            <Layout>

                {
                    !this.state.isFullScreen?
                    <SideMenu></SideMenu>
                    :
                    null
                }

                {/* 路由配置 */}
                <Layout className="site-layout">
                    {
                        !this.state.isFullScreen?
                        <TopHeader></TopHeader>
                        :
                        null
                    }
                    <Content className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 'auto', // 修复 内容自动撑开
                        }}>
                        <Switch>
                           
                            {
                                routes.map(item=>{
                                    if(item.permission.includes(roleType)){
                                        return  <Route path={item.path} component={item.component} key={item.path}/>
                                    }
                                    return null
                                })
                            }
                            <Redirect from="/" to="/home" exact />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
