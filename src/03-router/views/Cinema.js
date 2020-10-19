import React, { Component } from 'react'
import CinemaHeader from './cinema/CinemaHeader'

export default class Cinema extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    
    render() {
        return (
            <div>
                {/* <CinemaHeader {...this.props}></CinemaHeader> */}

                <CinemaHeader ></CinemaHeader>
            </div>
        )
    }
}
