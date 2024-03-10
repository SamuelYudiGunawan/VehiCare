import { useState, useEffect } from 'react';
import { vehicle_maintenance_project_backend } from 'declarations/vehicle_maintenance_project_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    fetchMaintenances();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    vehicle_maintenance_project_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  async function fetchMaintenances() {
    try {
      // Call the getMaintenances function on your canister
      const response = await vehicle_maintenance_project_backend.getMaintenances();
      
      // Check if response is a valid Result
      if (response.Ok) {
        const maintenances = response.Ok;
        setMaintenances(maintenances);
      } else {
        console.error('Error fetching maintenances:', response.Err);
      }
    } catch (error) {
      console.error('Error fetching maintenances:', error);
    }
  }
  
     
    
  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <h1>Maintenance List</h1>
      <ul>
        {maintenances.map((maintenance, index) => (
          <li key={index}>
            <strong>Name:</strong> {maintenance.name}, &nbsp;
            <strong>Date:</strong> {maintenance.date}, &nbsp;
            <strong>Type:</strong> {maintenance.typeVehicle}, &nbsp;
            <strong>Price:</strong> {maintenance.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
