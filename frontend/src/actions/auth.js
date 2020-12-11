import axios from "axios";
import { alert, setAlert } from "./alert";

import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    LOGOUT
} from "./types"

export const signin = (email, password) => async dispatch => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({email, password})

    try{
        const res = await axios.post('http://localhost:8000/api/token', config, body);

        dispatch({
            type: SIGNIN_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert("authenticated successfully", "success"))
    }

    catch(err){
        dispatch({
            type: SIGNIN_FAIL
        })

        dispatch(setAlert("eror authenticating", "error"))
    }

}

export const signup = (name, email, password, password2) => async dispatch => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({name, email, password, password2})

    try{
        const res = await axios.post('http://localhost:8000/api/accounts/signup', config, body);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })

        dispatch(signin(email, password))
    }

    catch(err){
        dispatch({
            type: SIGNUP_FAIL
        })

        dispatch(setAlert("eror authenticating", "error"))
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })

    dispatch(setAlert("logout successful", "success"))
}
