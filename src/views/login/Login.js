import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import Particles from 'react-particles-js';
import axios from 'axios'
import { message } from 'antd';


export default class Login extends Component {
    onFinish = (values) => {
        console.log("vallue", values)
        //json-server  用一个json文件模拟 增删改查的操作（restful），没有任何跨域限制
        //post
        // axios.post("http://localhost:8000/list",{
        //     "title": "文章-4",
        //     "author": "kerwin",
        //     "content": "44444",
        // }).then(res=>{
        //     console.log(res.data)
        // })

        //更新
        // axios.put("http://localhost:8000/list/1",{
        //     "title": "文章-1------",
        //     "author": "tiechui----",
        //     "content": "111111----",
        // })

        //删除
        // axios.delete("http://localhost:8000/list/1")

        // post 验证登录
        axios.get(`http://localhost:5000/users?username=${values.username}&password=${values.password}&roleState=${true}`).then(res=>{
            // console.log(res.data)
            if(res.data.length===0){
                message.error('用户名密码不匹配');

            }else{
                localStorage.setItem("token",JSON.stringify(res.data[0]))
                this.props.history.push("/")
            }
        })
    }

    componentDidMount() {
        console.log(document.documentElement.clientHeight)
    }


    render() {
        return (
            <div>
                <div style={{ background: "rgb(35, 39, 65)" }}>
                    <Particles height={document.documentElement.clientHeight - 5 + "px"} params={{
                        "background": {
                            "color": {
                                "value": ""
                            },
                            "image": "",
                            "position": "",
                            "repeat": "",
                            "size": "",
                            "opacity": 1
                        },
                        "backgroundMask": {
                            "cover": {
                                "color": {
                                    "value": "#fff"
                                },
                                "opacity": 1
                            },
                            "enable": false
                        },
                        "detectRetina": true,
                        "fpsLimit": 60,
                        "infection": {
                            "cure": false,
                            "delay": 0,
                            "enable": false,
                            "infections": 0,
                            "stages": []
                        },
                        "interactivity": {
                            "detectsOn": "canvas",
                            "events": {
                                "onClick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "onDiv": {
                                    "ids": [],
                                    "enable": false,
                                    "mode": [],
                                    "type": "circle"
                                },
                                "onHover": {
                                    "enable": true,
                                    "mode": "bubble",
                                    "parallax": {
                                        "enable": false,
                                        "force": 60,
                                        "smooth": 10
                                    }
                                },
                                "resize": true
                            },
                            "modes": {
                                "attract": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "speed": 1
                                },
                                "bubble": {
                                    "distance": 400,
                                    "duration": 2,
                                    "opacity": 1,
                                    "size": 40
                                },
                                "connect": {
                                    "distance": 80,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 60
                                },
                                "grab": {
                                    "distance": 400,
                                    "links": {
                                        "opacity": 1
                                    }
                                },
                                "push": {
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "speed": 1
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 200
                                },
                                "trail": {
                                    "delay": 1,
                                    "quantity": 1
                                }
                            }
                        },
                        "particles": {
                            "collisions": {
                                "enable": false,
                                "mode": "bounce"
                            },
                            "color": {
                                "value": "#ffffff",
                                "animation": {
                                    "enable": false,
                                    "speed": 1,
                                    "sync": true
                                }
                            },
                            "links": {
                                "blink": false,
                                "color": {
                                    "value": "#323031"
                                },
                                "consent": false,
                                "distance": 150,
                                "enable": false,
                                "opacity": 0.4,
                                "shadow": {
                                    "blur": 5,
                                    "color": {
                                        "value": "#00ff00"
                                    },
                                    "enable": false
                                },
                                "triangles": {
                                    "enable": false
                                },
                                "width": 1,
                                "warp": false
                            },
                            "move": {
                                "angle": 90,
                                "attract": {
                                    "enable": false,
                                    "rotate": {
                                        "x": 600,
                                        "y": 1200
                                    }
                                },
                                "direction": "none",
                                "enable": true,
                                "noise": {
                                    "delay": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 0
                                    },
                                    "enable": false
                                },
                                "outMode": "bounce",
                                "random": false,
                                "speed": 6,
                                "straight": false,
                                "trail": {
                                    "enable": false,
                                    "length": 10,
                                    "fillColor": {
                                        "value": "#000000"
                                    }
                                },
                                "vibrate": false,
                                "warp": false
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "area": 800,
                                    "factor": 1000
                                },
                                "limit": 0,
                                "value": 170
                            },
                            "opacity": {
                                "animation": {
                                    "enable": false,
                                    "minimumValue": 0.1,
                                    "speed": 1,
                                    "sync": false
                                },
                                "random": {
                                    "enable": false,
                                    "minimumValue": 1
                                },
                                "value": 1
                            },
                            "rotate": {
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "path": false,
                                "random": false,
                                "value": 0
                            },
                            "shadow": {
                                "blur": 0,
                                "color": {
                                    "value": "#000000"
                                },
                                "enable": false,
                                "offset": {
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            "shape": {
                                "options": {
                                    "character": {
                                        "fill": false,
                                        "font": "Verdana",
                                        "style": "",
                                        "value": "*",
                                        "weight": "400"
                                    },
                                    "char": {
                                        "fill": false,
                                        "font": "Verdana",
                                        "style": "",
                                        "value": "*",
                                        "weight": "400"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "star": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "height": 32,
                                        "replace_color": true,
                                        "src": "/virus.png",
                                        "width": 32
                                    },
                                    "images": {
                                        "height": 32,
                                        "replace_color": true,
                                        "src": "/virus.png",
                                        "width": 32
                                    }
                                },
                                "type": "image"
                            },
                            "size": {
                                "animation": {
                                    "destroy": "none",
                                    "enable": false,
                                    "minimumValue": 0.1,
                                    "speed": 40,
                                    "startValue": "max",
                                    "sync": false
                                },
                                "random": {
                                    "enable": false,
                                    "minimumValue": 1
                                },
                                "value": 16
                            },
                            "stroke": {
                                "width": 0,
                                "color": {
                                    "value": "#000000",
                                    "animation": {
                                        "enable": false,
                                        "speed": 1,
                                        "sync": true
                                    }
                                }
                            },
                            "twinkle": {
                                "lines": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                },
                                "particles": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                }
                            }
                        },
                        "pauseOnBlur": true
                    }
                    } />
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    // initialValues={{ remember: true }} //初始化
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>

                    </Form.Item>
                </Form>

            </div>
        )
    }
}
