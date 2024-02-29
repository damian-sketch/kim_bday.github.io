import { useState } from "react"
import { Answers } from "./revealedAnswers";


export const Prize = () => {
    const [isAnswered, setAnswer] = useState(false);
    const [answer, setAnswerValue] = useState('')
    const revealAnswer = (e) => {
        const Ans = e.target.value;
        setAnswer(true)
    
    }

    return (
        <div>
        {isAnswered ?<Answers/> :  
            <div className="gifts">
                <h1>Choose one option</h1>
        <button className="first" value="One night at an exotic resort of your choice!" onClick={revealAnswer}>A</button>
        <button className="second" value="A spa session, besides the one we had planned!" onClick={revealAnswer}>B</button>
                </div>}
        </div>

    )
}