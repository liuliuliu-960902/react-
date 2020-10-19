import React, { Component } from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Login from '../views/login/Login'
import DashBoard from '../views/dashboard/DashBoard'
export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={(props)=>
                        localStorage.getItem("token")?
                        <DashBoard {...props}></DashBoard>
                        :
                        <Redirect to="/login"/>
                    }/>
                </Switch>
            </HashRouter>
        )
    }
}
