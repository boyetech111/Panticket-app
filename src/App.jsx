import './App.css'
import Homepage from './Home/Homepage';
import Event from "./Event/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search/Search';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event/:eventId" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;