import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.userName}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}

function mapStateTOProps(state)
{
    return({
        userName:state.rootReducer.userName
    })
}

function mapDispatchTOProps(dispatch)
{
     return({
     
    })

}
export default connect(mapStateTOProps,mapDispatchTOProps)(About);