import React from 'react'; //import Vue from 'vue'
import ReactDOM from 'react-dom'; // ReactDOM react 进行dom操作的库。
// import './index.css';
import App from './App';
 
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <App/>,
  // </React.StrictMode>, 
  document.getElementById('app')
);
//js+xml  ===jsx 依赖于react 模块


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
