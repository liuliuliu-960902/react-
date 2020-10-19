import React, { Component } from 'react'
import axios from 'axios'
import {PageHeader} from 'antd'
export default class Preview extends Component {
    state = {
        info:null
    }
    render() {
        return (
            <div>
               {
                   this.state.info?
                   <div>
                        <PageHeader
                            className="site-page-header"
                            onBack={() => { this.props.history.goBack() }}
                            title={this.state.info.title}
                            subTitle={this.state.info.category.join("/")}
                        />

                        <div dangerouslySetInnerHTML={
                            {__html:this.state.info.content}
                        }></div>
                   </div>
                   :
                    null
               }
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/articles/${this.props.match.params.myid}`).then(res=>{
            console.log(res.data)
            this.setState({
                info:res.data
            })
        })
    }
    
}
