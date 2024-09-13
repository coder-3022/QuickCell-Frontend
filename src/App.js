import React, { useEffect, useState } from 'react';
import DropdownButton from './component/DropdownButton';

const App = () => {
  const [data, setData] = useState([]);
  const [userticket, setUserTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const dt = await res.json();
        
        // Log the fetched data
        console.log("Fetched Data:", dt);
        
        setData(dt.tickets);
        const filteredTickets = dt.tickets.filter(ticket => ticket.userId === 'usr-2');
        setUserTickets(filteredTickets);

        
        // Log state after setting it (useEffect might run multiple times, log in a separate useEffect)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Log the state whenever it changes
  useEffect(() => {
    console.log(userticket)
  }, [userticket]);

  return (
    <div>
      <DropdownButton />
    
    </div>
  );
};

export default App;


