import React, { useEffect, useState } from 'react'
import { Cards } from '../cards/Cards'
import axios from 'axios';


export const Landing = () => {
    let [hackers, setHackers] = useState([])
    let [page, setPage] = useState(1)
    let [sort, setSort] = useState("AtoZ")

    const getHacker = async (page, sort) => {
        let res = await axios.get("http://localhost:3001/hacker?page=" + page + "&sort=" + sort)
        setHackers(res.data);
        console.log(res.data[0])
        return res.data
    }
    const nextPage = async(e) => {
        e.preventDefault();
        if (hackers.length) {
            document.getElementById("prev").disabled = false;
            setPage(page + 1)
        } else {
            setPage(page - 1)

            document.getElementById("next").disabled = true;
        }
    }

    const prevPage = (e) => {
        e.preventDefault();
        if (page > 1) {
            document.getElementById("next").disabled = false;
            setPage(page - 1)
        } else {
            document.getElementById("prev").disabled = true;
        }
    }
    const changeSort = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        getHacker(page, sort)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, sort])


    return (
        <div>
            <div>
                <button id="prev" onClick={prevPage}>{"<"}</button>
                <span>{page}</span>
                <button id="next" onClick={nextPage}>{">"}</button>
                <select onChange={changeSort}>
                    <option value=""> Order By</option>
                    <option value="AtoZ">A to Z</option>
                    <option value="ZtoA">Z to A</option>
                </select>
            </div>
            <Cards hackers={hackers} />
        </div>
    )
}
