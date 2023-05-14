import { useNavigate } from "react-router-dom";
import TicketInput from "./TicketInput";

const TicketForm = ({ tickets, setTickets }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    // Check if all 9 tickets have been filled out.
    for (let i = 0; i < tickets.length; i++) {
      if (
        tickets[i].name === "" ||
        tickets[i].description === "" ||
        tickets[i].date === ""
      ) {
        alert(`Please fill out all fields for ticket ${i + 1}.`);
        return;
      }
    }
    alert("All tickets have been added!");
    navigate("/tickets");
  };

  const handleTicketChange = (index, field, value) => {
    const newTickets = [...tickets];
    newTickets[index][field] = value;
    setTickets(newTickets);
  };

  const handleCancel = () => {
    setTickets(tickets.map(() => ({ name: "", description: "", date: "" })));
  };
  return (
    <div className="bg-gray-100 w-[100%] shadow-md rounded-md p-4 max-w-screen mx-auto">
      <h1 className="text-center mb-4 text-gray-900 font-bold text-3xl">
        Add Jira Tickets
      </h1>
      <form className="bg-white p-4 rounded-md" onSubmit={onSubmit}>
        {tickets.map((ticket, index) => (
          <TicketInput
            key={index}
            ticket={ticket}
            index={index}
            handleTicketChange={handleTicketChange}
          />
        ))}
        <br />
        <div className="flex justify-center">
          <button
            className="mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Add Tickets
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
