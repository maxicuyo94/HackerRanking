import React from 'react'
import { NavLink } from 'react-router-dom';
import {  useSelector } from 'react-redux';


export const Nav = () => { 
    const logedUser = useSelector(state => state)


    return (
        <div>
            <NavLink to="/home" > Home </NavLink>
            <NavLink to="/top" > Tops </NavLink>
            <p>{logedUser.user.name ? 'hi ' + logedUser.user.name+' you are an '+ (logedUser.isadmin&&"admin")||"user" : ""}</p>


        </div>
    )
}
