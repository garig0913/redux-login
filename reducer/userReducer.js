import * as actionTypes from '../constants/userConstants';
export const getUsers = (state = { users: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_REQ:
            return {
                loading: true
            }
        case actionTypes.GET_USERS_RES:
            return {
                users: action.payload,
                loading: false
            }
        case actionTypes.GET_USERS_ERROR:
            return {
                error: action.error
            }
        case actionTypes.POST_USERS_RES:
            return {
                id: action.payload
            }
        default: return state
    }
}