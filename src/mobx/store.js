// store对象
import {observable} from 'mobx'

// observable 是可观察的创建者

const store = observable.map({
    isFullScreen:false,
    list:[]
})
// console.log(store)
export default store