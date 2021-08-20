import { useHistory } from "react-router-dom"
import useFetch from "./hook/useFetch"

export default ()=>{
    const days=useFetch(`http://localhost:4000/day/`)
    const history=useHistory()

    const addDay =()=>{
        fetch(`http://localhost:4000/day/`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                day:days.length+1
            })
        }).then(res=>{
            if(res.ok){
                alert('생성이 완료되었습니다')
                history.push(`/`)
            }
        }) 
    }

    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>

        </div>
    )
}