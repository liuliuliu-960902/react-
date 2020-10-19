import React from 'react'
import { Layout, Menu } from 'antd';
import menus from '../../router/menus'
import {withRouter} from 'react-router'
// import store from '../../redux';
import {connect} from 'react-redux'
console.log(menus)
const { SubMenu } = Menu;
const { Sider } = Layout;


function SideMenu(props){
    let openKeys = ['/'+props.location.pathname.split('/')[1]]

    let selectKeys = [props.location.pathname]

    function renderItem(items){

        try {
            var {roleType} = JSON.parse(localStorage.getItem("token"))    //从localStorage 取出roleType
        } catch (error) {
            props.history.replace("/login")
        }

        return items.map(item=>{
            if(item.children){
               return  item.permission.includes(roleType)?
               <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <item.icon />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                   {renderItem(item.children)}
                </SubMenu>
                :
                null
            }

            return  item.permission.includes(roleType)?
            <Menu.Item key={item.key} icon={<item.icon />}>
            {item.title}
            </Menu.Item>
            :null
        })
    }
    
    return (
        <Sider trigger={null} collapsible collapsed={props.kerwinCollapsed}>
            <div className="logo" >CMS平台</div>
            <Menu theme="dark" mode="inline"  defaultOpenKeys={openKeys}  selectedKeys={selectKeys} onClick={(item)=>{
                // console.log(item.key,this.props )
                props.history.push(item.key)
            }}>
                   {renderItem(menus)} 
            </Menu>
        </Sider>
    )
}

// class SideMenu extends Component {
    
//     render() {

//         // console.log(this.props.location.pathname)
     
//     }
//     /// 渲染侧边栏的函数
    
// }
export default withRouter(connect((state)=>{
    return {
        kerwinCollapsed:state.CollapsedReducer.isCollapsed
    }
})(SideMenu))

//低阶函数
// function add(a,b){
//     return a+b
// }
// console.log(add(1,2))

//高阶函数

// function square(add,a,b){
//     return add(a*a,b*b)
// }

// square(add,1,2)


