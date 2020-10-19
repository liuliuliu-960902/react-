// 1.  后端给定json文件，里面配置好了 ，改显示哪些内容
// 2.  前端自己写一个模块， 导出 要布局的内容
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
/*
  超级管理员   roleType  3
  管理员      roleType   2
  小编        roleType   1
*/ 

const menus = [
    {
        title:"首页",
        key:"/home",
        icon:UserOutlined,
        permission:[1,2,3]
    },
    
    {
        title:"用户管理",
        key:"/user-manage",
        icon:VideoCameraOutlined,
        permission:[3],
        children:[
            {
                title:"用户列表",
                icon:VideoCameraOutlined,
                key:"/user-manage/users",
                permission:[3]
            }
        ]
    },
    {
        title:"权限管理",
        key:"/right-manage",
        icon:UploadOutlined,
        permission:[3],
        children:[
            {
                title:"角色列表",
                icon:UploadOutlined,
                key:"/right-manage/roles",
                permission:[3]
            },
            {
                title:"权限列表",
                icon:UploadOutlined,
                key:"/right-manage/rights",
                permission:[3]
            }
        ]
    },
    {
        title:"文章管理",
        key:"/article-manage",
        icon:UploadOutlined,
        permission:[1,2,3],
        children:[
            {
                title:"文章列表",
                icon:UploadOutlined,
                key:"/article-manage/list",
                permission:[1,2,3]
            },
            {
                title:"文章分类",
                icon:UploadOutlined,
                key:"/article-manage/category",
                permission:[2,3]
            }
        ]
    }
]
export default menus