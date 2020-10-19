import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import css from './Tabbar.module.scss'

console.log(css)
    
export default class Tabbar extends Component {
    render() {
        return (
            <nav>
               <ul>
                    <li><NavLink to="/film" activeClassName={css.kerwinactive}>film</NavLink></li>
                    <li><NavLink to="/cinema" activeClassName={css.kerwinactive}>cinema</NavLink></li>
                    <li><NavLink to="/center" activeClassName={css.kerwinactive}>center</NavLink></li>
                </ul> 
            </nav>
        )
    }
}
