import React from 'react';
import PropTypes from 'prop-types';

class NumAdd extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <button onClick={() => this.props.onAddClick()}>add</button>
                <span>{this.props.num}</span>
                <button onClick={() => this.props.onDelClick()}>del</button>
            </div>
        )
    }
}
NumAdd.propTypes = {
    num: PropTypes.number.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default NumAdd;