import axios from 'axios'
//promise风格

// function getList(){
//    return  axios.get("http://localhost:5000/rights").then(res => {
//         // console.log(res.data)      
//         return {
//             type:"CMS_AddList",
//             payload:res.data
//         }
//     })
// }
// thunk
function getList(){

    return (dispatch)=>{
        axios.get("http://localhost:5000/rights").then(res => {
            // console.log(res.data)      
            dispatch({
                type:"CMS_AddList",
                payload:res.data
            })
        })
    }
}


export {getList}