import ActionTypes from "../constant/index"

const InitialState = {
    authed: ""
}


export default function (state = InitialState, action) {
    switch (action.type) {

        case (ActionTypes.AUTHENTICATION):
        alert("Case Match")
            return ({
                ...state,
                authed: action.payload
            })
        default:
            return state
    }

}