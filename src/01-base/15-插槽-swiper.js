import React, { Component } from 'react'
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
class MSwiper extends Component{


    componentDidMount(){
        new Swiper(".swiper-container",{
            loop:true
        })   
    }

    render(){
        return <div className="swiper-container" style={{width:'500px',height:"300px",background:"yellow"}}>
            <div className="swiper-wrapper">
                {this.props.children}
            </div>
        </div>
    }
}


export default class App extends Component {
    state = {
        datalist:[]
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                datalist:["cccc","ddddd","eeeee"]
            })
        },2000)    
    }
    
    render() {
        return (
            <div>
                app
                <MSwiper key={this.state.datalist.length}>
                    {
                        this.state.datalist.map(item=>
                            <div className="swiper-slide" key={item}>{item}</div>    
                        )
                    }
                </MSwiper>
            </div>
        )
    }
}
