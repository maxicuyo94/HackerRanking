import React from 'react'
import { Link } from 'react-router-dom';

import { Card } from '../card/Card'

export const Cards = (props) => {
    let { hackers } = props
    return (
        <div>
            {Array.isArray(hackers) && hackers.map((hacker, i) => {
                return <Link style={{ textDecoration: 'none' }} to={`/hacker/${hacker.uuid}`} key={`link_${hacker.name}`}>
                    <Card hacker={hacker} key={hacker.name}/> 
                </Link>
            })}
        </div >
    )
}
