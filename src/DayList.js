import { Link } from 'react-router-dom'
import dummy from './db.json'

export default ()=>{

    return <ul className='list_day'> 
        {dummy.day.map(day=>(
            <li>
                <Link to={`/day/${day.day}`}>day {day.day}</Link>
            </li>
        ))}
     </ul>
 } 