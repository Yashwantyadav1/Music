import'./output.css';
import LoginComponent from './routes/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home </div>} />
        <Route path="/about" element={<div>About </div>} />
        <Route path="/login" element={<LoginComponent/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
