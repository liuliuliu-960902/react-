import React, { Component } from 'react'
import {withRouter} from 'react-router' //react-router-dom依赖， 自动安装
 class CinemaHeader extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    

    render() {
        return (
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <button>城市跳转</button>
                <span>影院</span>
                <button onClick={()=>{
                    this.props.history.push(`/cinema/search`)
                }}>search跳转</button>
            </div>
        )
    }
}
export default withRouter(CinemaHeader)
// withRouter 函数组件

// 高阶组件，（获取低阶组件， 生成高阶组件）

// withRoute 就是一个高阶组件。
// HOC= high order component


// 1. css冲突？？？
// 2. 解决跨域？？？