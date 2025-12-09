import './App.css';
import Home from './Pages/Home';
import Question from './Components/Question';
import { Routes, Route } from 'react-router-dom'; 
import Results from './Components/Results';

function App() {
  return (
    <Routes>
      
    <Route 
        path="/" 
        element={<Home/>} 
    />
    
    <Route 
        path="/questionario" 
        element={<Question />} 
    />

    <Route 
        path="/resultados" 
        element={<Results />} 
    />  
    
    </Routes>
  );
}

export default App;
