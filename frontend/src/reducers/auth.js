/* eslint-disable import/no-anonymous-default-export */
import {
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAthenticated: null,
    loading: false
}

export default function(state=initialState, action){
    const {type, payload} = action

    switch(type){
        case SIGNIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            return{
                ...state,
                isAthenticated: true,
                loading: false,
                token: payload.access
            }

        case SIGNUP_SUCCESS:
            return{
                ...state,
                isAthenticated: false,
                loading: true
            }

        case SIGNUP_FAIL:
        case SIGNIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                isAthenticated: false,
                loading: false,
                token: null
            }
        default:
            return state
    }
}