import dummy from './db.json'
import { useParams } from 'react-router-dom'
import Word from './Word'

export default ()=>{
    const day=useParams().day
    const wordList=dummy.word.filter(word=>(
        word.day=== Number  (day)
    ))
 
    return (
    <div>
        <h2>Day {day} </h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>  
    </div>
    )
}     