import React from 'react'
import App from './components/App'
import {connect} from 'react-redux'
import {Link,Route} from 'react-router-dom'
import {logout} from './actions'

var erying=()=>{
    return <div><h1>erying</h1></div>
}
var qibinglian=()=>{
    return <h1>qibinglian</h1>
}
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
          <button onClick={()=>this.props.onOutClick()}>out</button>
          <ul>
            <li>
              <Link to='/dashboard/'>一营</Link>
            </li>
            <li>
              <Link to='/dashboard/erying'>二营</Link>
            </li>
            <li>
              <Link to='/dashboard/qibinglian'>qi</Link>
            </li>
          </ul>
        <Route path='/dashboard/' component={App}></Route>
        <Route path='/dashboard/erying' component={erying}></Route>
        <Route path='/dashboard/qibinglian' component={qibinglian}></Route>
        </div> 
        )
    }
}
const mapStateToProps = (state,ownProps) => {
  state.auth.isAuth?null:ownProps.history.push("/login/");
  return {
      isAuth:state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onOutClick:()=>dispatch(logout()),
  }
}

const Dashboards = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default Dashboards;