import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import useFetch from "./hook/useFetch"

export default ()=>{
    const days=useFetch('http://localhost:4000/day')
    const history=useHistory()
    const [isLoding,setIsLoding]=useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

    if(!isLoding){
        setIsLoding(true)
        fetch(`http://localhost:4000/word/`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                day:dayRef.current.value,
                eng:engRef.current.value,
                kor:korRef.current.value,
                isDone:false
            })
        }).then(res=>{
            if(res.ok){
                alert('생성이 완료되었습니다')
                history.push(`/day/${dayRef.current.value}`)
                setIsLoding(false)
                }
            })
        }
    }

    const engRef=useRef(null)
    const korRef=useRef(null)
    const dayRef=useRef(null)

    return(
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
                <input type='txt' placeholder='computer' ref={engRef}/>
            </div>
            <div className='input_area'>
                <label>kor</label>
                <input type='txt' placeholder='컴퓨터' ref={korRef}/>
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>{isLoding?'Saving...':'저장'}</button>
        </form>
    )
} 