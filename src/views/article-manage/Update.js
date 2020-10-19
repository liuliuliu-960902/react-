import React, { Component } from 'react'
import { PageHeader, Steps, Button,Form, Input,Cascader, message } from 'antd';
import './artilce.css'
import Axios from 'axios';
import ArticlEditor from './ArticlEditor';
const { Step } = Steps;

export default class Update extends Component {
    state = {
        current: 0,
        options:[],
        formInfo:{},
        content:""
    }

    fromref = React.createRef()

    render() {
        // 24栅格系统
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
          
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => { this.props.history.goBack() }}
                    title="更新文章"
                    subTitle="This is a subtitle"
                />


                <Steps current={this.state.current}>

                    <Step key={1} title="基本信息" description="文章分类&标题" />
                    <Step key={2} title="文章内容" />
                    <Step key={3} title="提交文章" />

                </Steps>

                <div style={{ marginTop: "50px" }}>
                    <div className={this.state.current === 0 ? '' : 'hidden'}>
                        <Form
                            {...layout}
                            name="basic"
                            ref={this.fromref}
                        >
                            <Form.Item
                                label="文章标题"
                                name="title"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="文章分类"
                                name="category"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                  <Cascader options={this.state.options} placeholder="Please select" fieldNames={{
                                      label:"title"
                                  }}/>

                            </Form.Item>
                        </Form>
                    </div>
                    <div className={this.state.current === 1 ? '' : 'hidden'}>
                        {
                            this.state.content?
                            <ArticlEditor getContent={(content)=>{
                                // console.log("父组定义",content)
    
                                this.setState({
                                    content
                                })
                            }} content= {this.state.content}></ArticlEditor>
                            :null
                        }
                    </div>
                    <div className={this.state.current === 2 ? '' : 'hidden'}>
                        提交文章
                    </div>
                </div>


                {/* 上一步，下一步按钮显示 */}
                <div className="steps-action">
                    {
                        this.state.current < 2 && (
                            <Button type="primary" onClick={() => this.next()}>
                                下一步
                            </Button>
                        )}
                    {this.state.current === 2 && (
                        <Button type="primary" onClick={this.handleSubmit}>
                            提交
                        </Button>
                    )}
                    {this.state.current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                </div>

                {/* <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row> */}
            </div>
        )
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/categories').then(res=>{
            console.log(res.data)
            this.setState({
                options:res.data
            })
        })

        // console.log(this.props.match.params.myid)
        Axios.get(`http://localhost:5000/articles/${this.props.match.params.myid}`).then(res=>{
            console.log(res.data)
            this.setState({
                formInfo:{
                    title:res.data.title,
                    category:res.data.category
                },
                content:res.data.content
            })

            this.fromref.current.setFieldsValue({
                title:res.data.title,
                category:res.data.category
            })
        })
    }
    
    //提交方法

    handleSubmit = ()=>{
        // console.log(this.state.formInfo,this.state.content)
        let {username} = JSON.parse(localStorage.getItem("token"))
        Axios.put(`http://localhost:5000/articles/${this.props.match.params.myid}`,{
            ...this.state.formInfo,
            content:this.state.content,
            author:username
        }).then(res=>{
            // console.log(res.data)
            this.props.history.goBack()
        })
    }

    next = () => {
        //在表单页， 点击下一步
        if(this.state.current===0){

            this.fromref.current.validateFields().then(res=>{
                console.log(res)
                this.setState({
                    current: this.state.current + 1,
                    formInfo: res
                })
            })

            return 
        }

        //在富文本页， 点击下一步

        if(this.state.current===1){
            this.state.content?this.setState({
                current: this.state.current + 1
            }):message.error("不能为空")
        }
        
    }

    prev = () => {
        this.setState({
            current: this.state.current - 1
        })
    }
}

/*
 1. 引入富文本编辑器
 2. 拿到富文本编辑器的数据--复杂对象-->无法同步this.state.content

 3. 复杂对象==> html, markdown =>this.state.content

 4. 提交html代码片段存储数据库。

*/