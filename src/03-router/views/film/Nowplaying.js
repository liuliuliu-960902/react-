import React, { Component } from 'react'
import axios from 'axios'
export default class Nowplaying extends Component {

    state = {
        datalist:[
            {
                id:4123,
                name:"信条"
            },
            {
                id:4245,
                name:"八百"
            },
            {
                id:3673,
                name:"花木兰"
            }
        ]
    }

    componentDidMount() {
        axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=43388C403C4911EABDC9998C784A573A4F64A16AA5A34184BADE807E506D749E&optimus_risk_level=71&optimus_code=10").then(res=>{
            console.log(res.data)
        })
    }
    
        
    render() {
        return (
            <div>
                Nowplaying 组件
                {
                    this.state.datalist.map(item=>
                        <li key={item.id} onClick={this.handleClick.bind(this,item.id)}>{item.name}</li>    
                    )
                }
            </div>
        )
    }

    handleClick(id){
        // console.log(id)

        // console.log(this.props)
        this.props.history.push(`/detail/${id}`)
    }
}
