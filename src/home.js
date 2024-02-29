import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'

export const Home = () => {
const { height, width} = useWindowSize();
const navigate = useNavigate();

const navigateToGift = () => {
    navigate('/gift')
}
  return(
     <div className='text'>
     <Confetti width={width} height={height} recycle={true} />
    <h1 class="header">Happy Birthday Kimmy!</h1>
    <p>Today is a special day for my special person and I just wanted to convey it in a special way.Your presence on
        this planet is a big joy to me and I wish you much much more abundance in life and success in your endeavors. 
        Whenever you're ready, me and you can share a special moment in celebration of your day so I have two options 
        I created . Click the button below and choose one of the options then we'll figure out the details from there.
        Happy birthday my love ❤️️
    </p>
    <button onClick={navigateToGift}>Dare to click? ❤️️</button>
  </div>
  )
}