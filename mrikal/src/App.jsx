import { Route, Routes } from "react-router-dom";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { useState } from "react";

function App() {
  const [tickets, setTickets] = useState([
    {
      name: "Ticket 123",
      description: "Description 456",
      date: "11/1/2022",
    },
    {
      name: "Ticket 789",
      description: "Description 321",
      date: "11/2/2022",
    },
    {
      name: "Ticket 654",
      description: "Description 987",
      date: "11/3/2022",
    },
    {
      name: "Ticket 147",
      description: "Description 258",
      date: "11/4/2022",
    },
    {
      name: "Ticket 369",
      description: "Description 159",
      date: "11/5/2022",
    },
    {
      name: "Ticket 753",
      description: "Description 951",
      date: "11/6/2022",
    },
    {
      name: "Ticket 852",
      description: "Description 456",
      date: "11/7/2022",
    },
    {
      name: "Ticket 963",
      description: "Description 741",
      date: "11/8/2022",
    },
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
