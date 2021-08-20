// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './hook/useFetch'

export default () =>{
    const day=useFetch('http://localhost:4000/day')
 
    return ( 
    <div>
        <ul className='list_day'> 
            { day.map(day=>(
                <li id={day.id}>
                    <Link to={`/day/${day.day}`}>day {day.day}</Link>
                </li>
            ))}
        </ul> 
    </div>
    )
 } 