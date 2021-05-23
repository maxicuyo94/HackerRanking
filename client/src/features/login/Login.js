import React, { useEffect, useState, } from 'react'
import { getAdmin, getUser } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


export const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const logedUser = useSelector(state => state)
    const [user, setUser] = useState({ email: '', password: '' })
    const handleLogUser = (e) => {
        e.preventDefault();
        dispatch(getUser(user))
        // logedUser.user.name ? history.push("/home") : alert(" wrong mail or password")
    }
    const handleLogAdmin = (e) => {
        e.preventDefault();
        dispatch(getAdmin(user))
        // logedUser.user.name ? history.push("/home") : alert(" wrong mail or password")

    }
    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name
        let value = e.target.value
        setUser({ ...user, [name]: value })
    }
    useEffect(() => {
        logedUser.user.name ? history.push("/home") : alert(" wrong mail or password")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logedUser])

    return (
        <div>
            <form>
                <h4>Login</h4>
                <label>email</label>
                <input type="text" name="email" onChange={handleChange} />
                <label>password</label>
                <input type="password" name="password" onChange={handleChange} />
                <button onClick={handleLogUser}>log As user</button>
                <button onClick={handleLogAdmin}>log As admin</button>
            </form>
            <p>{logedUser.user.name ? 'hi' + logedUser.user.name : ""}</p>

        </div>
    )
}
