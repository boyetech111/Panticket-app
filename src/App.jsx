import './App.css'
import Homepage from './Home/Homepage';
import Event from "./Event/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search/Search';
import ConfirmTicket from './ConfirmTicket/ConfirmTicket';
import PurchaseTicket from './PurchaseTicket/PurchaseTicket';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/event/:eventId/purchase" element={<PurchaseTicket />} />
          <Route path="/ticket/:ticketId" element={<ConfirmTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;