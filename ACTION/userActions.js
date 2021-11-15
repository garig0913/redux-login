import * as actionTypes from '../constants/userConstants';
import axios from 'axios';

export const postUsers = userData => async dispatch => {
    try {
        dispatch({
            type: actionTypes.POST_USERS_REQ
        })
        const { data } = await axios.post('http://localhost:3001/newUser', userData);
        dispatch({
            type: actionTypes.POST_USERS_REQ,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.POST_USERS_ERROR,
            error: err.message
        })
    }
}

export const loginUser = loginData => async dispatch => {
    dispatch({
        type: actionTypes.LOGIN_USER_REQ
    })
    const { data } = await axios.post('http://localhost:3001/login', loginData)
    dispatch({
        type: actionTypes.POST_USERS_RES,
        payload: data.id
    })
}