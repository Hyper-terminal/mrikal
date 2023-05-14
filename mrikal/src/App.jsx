import { Route, Routes } from "react-router-dom";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { useState } from "react";

function App() {
  const [tickets, setTickets] = useState([
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
    { name: "", description: "", date: "" },
  ]);

  return (
    <>
      <Routes>
        <Route
          index
          element={<TicketForm tickets={tickets} setTickets={setTickets} />}
        />
        <Route
          path="/tickets"
          element={<TicketList tickets={tickets} setTickets={setTickets} />}
        />
      </Routes>
    </>
  );
}

export default App;
