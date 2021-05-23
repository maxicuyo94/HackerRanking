import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Detail = (prop) => {
    let { uuid } = useParams()
    let [hacker, setHacker] = useState({})
    const getHacker = async (uuid) => {
        let res = await axios.get("http://localhost:3001/hacker/uuid/" + uuid)
        setHacker(res.data);
        return res.data
    }

    useEffect(() => {
        getHacker(uuid)
    }, [uuid])
   
    return (
        <div>
            <div>
                <img src={hacker.pictureLink} alt={` ${hacker.name}`} />
            </div>
            <p>name: {hacker.name}</p>
            <p>profileLink : {hacker.profileLink}</p>
            <p>location : {hacker.location}</p>
            <p>challengersSolved : {hacker.challengersSolved}</p>
            <p>solutionsSubmited : {hacker.solutionsSubmited}</p>
            <p>overallRank : {hacker.overallRank}</p>
            <p>followers : {hacker.followers}</p>
            <p>following : {hacker.following}</p>
            <p>noOfVotes : {hacker.noOfVotes}</p>
            <p>timestamp : {hacker.timestamp}</p>
            <p>deviceType : {hacker.deviceType}</p>
            <p>dataStructures : {hacker.dataStructures}</p>
            <p>algorithms : {hacker.algorithms}</p>
            <p>cpp : {hacker.cpp}</p>
            <p>java : {hacker.java}</p>
            <p>python : {hacker.python}</p>
            <p>html : {hacker.html}</p>
            <p>javascript : {hacker.javascript}</p>
            <p>myRank : {hacker.myRank}</p>

           
        </div>
    )
}
