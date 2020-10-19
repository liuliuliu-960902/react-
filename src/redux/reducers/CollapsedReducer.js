//es6 默认参数
const CollapsedReducer = (prevState={
    isCollapsed:false
},action={})=>{
    // console.log(action)

    let {type} = action
    // switch
    let newState = {...prevState}
    switch(type){
        case "CMS_Collapsed":
            newState.isCollapsed = !newState.isCollapsed
            return newState
        // case "CMS_List":
        default :
            return prevState
    }
    // return prevState
}

export {CollapsedReducer}