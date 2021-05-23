import React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => { 

    return (
        <div>
            <NavLink to="/landing" > Home </NavLink>
            <NavLink to="/top" > Tops </NavLink>
        </div>
    )
}
