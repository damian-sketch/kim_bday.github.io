import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Prize } from './prize';


const App = () => {
    return (
        <>
            <Routes>  
                <Route path="/" element={<Home />} />
                <Route path="/gift" element={<Prize />} />
            </Routes>
        </>
    );
};

export default App;