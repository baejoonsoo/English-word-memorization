// import { useEffect, useState } from ' react'
import { useParams } from 'react-router-dom'
import useFetch from './hook/useFetch'
import Word from './Word'

export default ()=>{
    const day=useParams().day
    const word=useFetch(`http://localhost:4000/word?day=${day}`)

    return (
    <div>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {word.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>  
    </div>
    )
}     