import React, { Component } from 'react'
import Router from './router'
import Tabbar from './components/Tabbar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Tabbar></Tabbar>
                </Router>
            </div>
        )
    }
}
