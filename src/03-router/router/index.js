// 利用路由模块创建一个组件
import {HashRouter as KerwinRouter,Route,Redirect, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Search from '../views/Search'
import Detail from '../views/Detail'

const routes = [
    {
        path:"/film",
        component:Film
    },
    {
        path:"/cinema",
        component:Cinema,
        isExact :true
    },
    {
        path:"/cinema/search",
        component:Search,
        isAuth:false
    },
    {
        path:"/center",
        component:Center,
        isAuth:true
    },
    {
        path:"/detail/:myid",
        component:Detail,
    }
]

export default class Router extends Component {
    render() {
        return (
            // HashRouter 创建的hash模式
            // BrowerRouter 创建的是history模式
            <KerwinRouter>
                {this.props.children}
                <Switch>
                    {/* 匹配到第一个符合的路径就结束匹配 */}
                    {
                        routes.map(item=>{
                                if(item.isAuth){
                                //   return  <Route key={item.path}  path={item.path} component={item.component} exact={item.isExact}/>   

                                return <Route path={item.path} key={item.path} render={
                                    ()=> localStorage.getItem("token")?<item.component />:<Redirect to="/login"/>
                                }/>
                                }else{
                                    return  <Route key={item.path}  path={item.path} component={item.component} exact={item.isExact}/>    
                                }

                            }// exact 绝对匹配
                        )
                    }

                    <Redirect from="/" to="/film" exact></Redirect>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </KerwinRouter>
        )
    }
}


// router.beforeEach
// beforeRouterEneter

/*
1. 一级路由
2. 嵌套路由
3. 重定向
4. hash history
5. 声明式导航 vs 编程式导航
6. 动态路由
7. 拦截

*/