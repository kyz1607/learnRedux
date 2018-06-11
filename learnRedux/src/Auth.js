import React from 'react'
import {connect} from 'react-redux'
import {login} from './actions'

class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.props.onInClick()
                }}>in</button>
                <h2>Auth page</h2>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    state.auth.isAuth?ownProps.history.push("/dashboard/"):null;
    return {
        isAuth:state.auth.isAuth
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        onInClick:()=>dispatch(login()),
        onOutClick:()=>dispatch(logout()),
    }
}
  
const Auths = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)

export default Auths;