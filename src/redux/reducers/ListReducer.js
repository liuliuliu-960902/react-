//es6 默认参数
const ListReducer = (prevState={
    list:[]
},action={})=>{
    console.log(action)

    let {type,payload} = action
    // switch
    let newState = {...prevState}
    switch(type){
        case "CMS_AddList":
            newState.list = payload
            return newState
        // case "CMS_List":
        default :
            return prevState
    }
    // return prevState
}

export {ListReducer}