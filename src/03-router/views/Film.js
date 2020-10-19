import React, { Component } from 'react'
import {NavLink ,Switch,Route, Redirect} from 'react-router-dom'
import Nowplaying from './film/Nowplaying'
import Comingsoon from './film/Comingsoon'

import css  from './film/film.module.css'
export default class Film extends Component {
    render() {
        return (
            <div>
                <div style={{height:"200px",background:"yellow"}}></div>
                <ul>
                    <li>
                        <NavLink to="/film/nowplaying" activeClassName={css.kerwinactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film/comingsoon" activeClassName={css.kerwinactive}>即将上映</NavLink>
                    </li>
                </ul>
                
            
                <Switch>
                    <Route path="/film/nowplaying" component ={Nowplaying}/>
                    <Route path="/film/comingsoon" component ={Comingsoon}/>
                    <Redirect from="/film" to="/film/nowplaying"></Redirect>
                </Switch>
            </div>
        )
    }
}
