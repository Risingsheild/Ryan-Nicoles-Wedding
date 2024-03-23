import './App.css';
import Home from './Components/Home/home.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Welcome to Ryan and Nicoles Wedding 
        </header>
        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
