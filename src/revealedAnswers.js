import Confetti from 'react-confetti';
import useWindowSize from "react-use/lib/useWindowSize"

export const Answers = () =>{
    const {height, width} = useWindowSize();

    return (
        
        <div className="gifts">
            <Confetti width={width} height={height} recycle={true} />
<button className="first">A: One night at a fancy resort of your choice </button>
<button className="second" >B: A spa session, besides the one we had planned</button>
        </div>
    )
}