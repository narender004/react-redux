import actionTypes from '../constant/constant';
const INITIAL_STATE ={

    userName : 'ali'
}

export default (states =INITIAL_STATE,action)=>{

    switch(action.type)
    {
        case actionTypes.CHANGEUSERNAME:
     return ({
        ...states,
        userName:action.payload
     });
     default :
     return states;
    }
}