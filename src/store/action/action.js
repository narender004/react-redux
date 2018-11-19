import actionTypes from '../constant/constant';
export function changeState(updatedUserName)
{
    return dispatch => 
    {
         // console.log('hello');
         dispatch({type:actionTypes.CHANGEUSERNAME,payload:updatedUserName})
    }

  
}