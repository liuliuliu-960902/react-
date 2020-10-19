import React, { Component } from 'react'

export default class App extends Component {
    state=  {
        count:1
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    },()=>{
                        console.log("在这里获得是最新的状态和最新的dom",this.state.count)

                        // new Swiper
                        // new BetterScroll

                    }) // $nextTick


                    // this.setState({
                    //     count:this.state.count+1
                    // })
                    // this.setState({
                    //     count:this.state.count+1
                    // })

                    console.log("此时访问的还是老的状态",this.state.count)
                }}>add-setState第二个参数</button>


                <button onClick={()=>{
                    //setState放在异步中，  更新状态就是同步。
                    setTimeout(()=>{
                        this.setState({
                            count:this.state.count+1
                        })

                        console.log(this.state.count)

                        this.setState({
                            count:this.state.count+1
                        })

                        console.log(this.state.count)

                        this.setState({
                            count:this.state.count+1
                        })

                        console.log(this.state.count)
                    },0)
                }}>add-改setState为同步</button>
            </div>
        )
    }
}

// setState 更新状态 并非是同步的。
