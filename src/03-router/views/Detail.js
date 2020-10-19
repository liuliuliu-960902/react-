import React, { Component } from 'react'

export default class Detail extends Component {

    componentDidMount() {
        console.log(`根据不同的id发ajax`,this.props.match.params.myid)
    }
    
    render() {
        return (
            <div>
                detail
            </div>
        )
    }
}
