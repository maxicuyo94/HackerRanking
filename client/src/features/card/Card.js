import React from 'react'

export const Card = (props) => {
    let {hacker}=props
    return (
        <div >
            <div>
        <img src={hacker.pictureLink} alt={` ${hacker.name}`}/>
            </div>
            <div >
        <p>{hacker.name}</p>
            </div>
        </div >
    )
}
