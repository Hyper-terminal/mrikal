const TicketInput = ({ ticket, index, handleTicketChange }) => (
  <div className="bg-white shadow-md rounded-md p-4 mb-4 max-w-screen">
    <h3 className="text-center text-gray-900 font-semibold mb-2">
      Ticket {index + 1}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <label className="block">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          value={ticket.name}
          onChange={(event) =>
            handleTicketChange(index, 'name', event.target.value)
          }
          className="border outline-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700 py-1 px-2 mt-1 mb-1 w-full"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Description:</span>
        <input
          type="text"
          value={ticket.description}
          onChange={(event) =>
            handleTicketChange(index, 'description', event.target.value)
          }
          className="rounded-md border outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700 py-1 px-2 mt-1 mb-1 w-full"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Date:</span>
        <input
          type="date"
          value={ticket.date}
          onChange={(event) =>
            handleTicketChange(index, 'date', event.target.value)
          }
          className="rounded-md border outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700 py-1 px-2 mt-1 mb-1 w-full"
        />
      </label>
    </div>
  </div>
);

export default TicketInput;
