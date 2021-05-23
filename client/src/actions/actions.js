import axios from 'axios';

const GET_USER = 'GET_USER';
const GET_ADMIN = 'GET_ADMIN';


export const getUser = (user) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:3001/login",user)
        console.log(user)
        console.log(res.data)
        dispatch({ type: GET_USER, payload: res.data })
    }
}

export const getAdmin = (user) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:3001/login/admin",user)
        console.log(user)
        console.log(res.data)
        dispatch({ type: GET_ADMIN, payload: res.data })
    }
}
