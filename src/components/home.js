import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

import {changeState} from '../store/action/action';

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            userName:''
        }
    }

    _changeData(){
       // console.log('event called');
      // changeState()
      this.props.changeStateTOReducer(this.state.userName);
      this.setState({
            userName:''
        })
    }
changeuserinput(event)
{
//console.log(event.target.value);
this.setState({
    userName:event.target.value
})

}
    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <input type="text" value={this.state.userName} onChange={this.changeuserinput.bind(this) }/>
                <Link to='/about'>Go to About</Link>
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
     changeStateTOReducer: (updatedUserName)=>{

        dispatch(changeState(updatedUserName));
        
     }
    })
}
export default connect(mapStateTOProps,mapDispatchTOProps)(Home);

