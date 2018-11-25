import ActionTypes from "../constant"


export function authed(data){
    // alert(data)
    return dispatch => {    
        dispatch({
            type : ActionTypes.AUTHENTICATION, 
            payload : data
        })
    }
}