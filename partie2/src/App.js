import './App.css';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
