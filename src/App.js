import logo from './logo.svg';
import './App.css';
import LoginForm from './Component/LoginForm';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='home' element={<HomePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
