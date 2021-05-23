import React, { useEffect, useState } from 'react'
import { Cards } from '../cards/Cards'

import axios from 'axios';


export const Top3 = () => {
    let [hackers, setHackers] = useState([])
    let [topBy, setTopBy] = useState("top")


    const getHacker = async (tipe) => {
        let res = await axios.get("http://localhost:3001/hacker/" + tipe)
        setHackers(res.data);
        return res.data
    }
    const changeSort = (e) => {
        setTopBy(e.target.value)
    }

    useEffect(() => {
        getHacker(topBy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topBy])
    return (
        <div>
            <select onChange={changeSort}>
                <option value="top">Overall Rank</option>
                <option value="myTop">My Rank</option>
            </select>
            <Cards hackers={hackers} />
        </div>
    )
}
