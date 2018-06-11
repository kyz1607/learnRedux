import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'

import thunk from 'redux-thunk'
import todoApp from './reducers'
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth.js'
import Dashboard from './Dashboard'


let store = createStore(todoApp,applyMiddleware(thunk))

// class Test extends React.Component{
//   render(){
//     console.log(this.props)
//     return <h2>ceshi</h2>
//   }
// }
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
     <Switch>
        <Route path='/login' component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/login'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),document.getElementById('root'));
registerServiceWorker();
