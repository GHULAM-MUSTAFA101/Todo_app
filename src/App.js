import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Read from './components/Read';
import Updated from './components/Updated';

function App() {
  return (
    <div className="App">
      <h3 className='mt-5' >Todo App</h3>
    <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Create />} />
              <Route exact path="/Read" element={<Read />} />
              <Route exact path="/update" element={<Updated />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
