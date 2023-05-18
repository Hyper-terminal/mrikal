import { useLayoutEffect, useState, useRef } from "react";

const TicketList = ({ tickets, setTickets }) => {
  const [sortOrder, setSortOrder] = useState("default");
  const listRef = useRef(null);
  const origins = useRef({});

  const sortedTickets =
    sortOrder === "default"
      ? tickets
      : sortOrder === "date"
      ? [...tickets].sort((a, b) => new Date(a.date) - new Date(b.date))
      : [...tickets].sort(
          (a, b) => a.description.length - b.description.length
        );

  const shuffleHandler = () => {
    const newTickets = [...tickets];
    for (let index = 0; index < tickets.length; index++) {
      const newIndex = Math.floor(Math.random() * tickets.length);

      // swap them with new indexes
      [newTickets[index], newTickets[newIndex]] = [
        newTickets[newIndex],
        newTickets[index],
      ];
    }
    setTickets(newTickets);
  };

  useLayoutEffect(() => {
    if (listRef.current) {
      const list = listRef.current;
      const children = list.children;

      for (const child of children) {
        const key = child.id;
        const next = child.getBoundingClientRect();
        if (key in origins.current) {
          const previous = origins.current[key];
          const delta = getDelta(previous, next);
          if (!isZero(delta)) {
            invert(delta, child);
            requestAnimationFrame(() => {
              play(child);
            });
          }
        }
        origins.current[key] = next;
      }
    }
  }, [sortedTickets]);

  return (
    <div className="min-h-screen bg-gray-50 min-w-screen pt-10">
      <div className="bg-white shadow-md rounded-md p-4 max-w-7xl mx-auto">
        <h1 className="text-center mb-4 text-gray-900 font-bold text-xl">
          Tickets
        </h1>
        <div className="flex justify-center mb-4">
          Sort by:
          <button
            className="ml-2 rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => setSortOrder("default")}
          >
            Default
          </button>
          <button
            className="ml-2 rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => setSortOrder("date")}
          >
            Date
          </button>
          <button
            className="ml-2 rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => setSortOrder("description")}
          >
            Description Length
          </button>
          {sortOrder === "default" && (
            <button
              className="ml-2 rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={shuffleHandler}
            >
              Shuffle
            </button>
          )}
        </div>
        <ul ref={listRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sortedTickets.map((ticket, index) => (
            <li
              key={index}
              id={ticket.name}
              className="text-gray-700 mb-2 bg-white rounded-lg shadow-md px-6 py-6 flex flex-col items-center border border-gray-200 hover:border-blue-500 hover:bg-blue-100 transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 ease-linear min-h-[180px]"
            >
              <div className="flex justify-between w-full">
                <span className="font-semibold text-xl">{ticket.name}</span>
                <span className="text-sm">{ticket.date}</span>
              </div>
              <span className="text-base mt-2">{ticket.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const invert = (delta, elem) => {
  elem.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
  elem.style.transition = `transform 0s`;
};

const play = (elem) => {
  elem.style.transform = ``;
  elem.style.transition = `transform 300ms ease`;
};

const getDelta = (start, target) => ({
  top: start.top - target.top,
  left: start.left - target.left,
});

const isZero = (delta) => delta.left === 0 && delta.top === 0;

export default TicketList;
