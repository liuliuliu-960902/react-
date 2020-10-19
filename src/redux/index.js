//创建store
import {combineReducers, createStore,applyMiddleware,compose} from 'redux'
import { ListReducer } from './reducers/ListReducer'
import { CollapsedReducer } from './reducers/CollapsedReducer'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'kerwinPersist',
    storage,
  }
  

//es6 默认参数
const reducer = combineReducers({
    CollapsedReducer,
    ListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(promiseMiddleware,thunkMiddleware)))

const persistor = persistStore(store)


export {store,persistor} //公共的store对象

//纯函数---原生js

/*
    1. 对外界没有副作用的函数
    2. 同样的输入得到同样的输出

    var obj = {
        name:"kerwin"
    }
    function test(prevobj){
        var newobj = {...prevobj}
        newobj.name="xiaoming"
        return newobj
    }

    test(obj)
*/


/*
    柯里化函数 ，参数的缓存，高效编程方式  （闭包）

*/

// function test(url,path,params){
//     // return a+b+c
//     // return axios.get(url+path,{params})
//     // return url+path+params

//     return function(path,params){
//         return url+path+params
//     }
// }

// var afunc = test("www.a.com")
// afunc("/home",{name:"kerwin"})
// afunc("/list",{name:"xiaomng"})

// test("www.a.com","/home",{name:"kerwin"})
// test("www.a.com","/list",{name:"xiaoming"})


// test("www.b.com","/home",{name:"kerwin"})
// test("www.b.com","/list",{name:"xiaoming"})

