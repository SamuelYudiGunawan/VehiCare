import { useState, useEffect } from 'react';
import { vehicle_maintenance_project_backend } from 'declarations/vehicle_maintenance_project_backend';

function App() {
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    fetchMaintenances();
  }, []);

  async function addMaintenance(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const type = event.target.elements.type.value;
    const date = event.target.elements.date.value;
    const part = event.target.elements.part.value;
    const price = parseFloat(event.target.elements.price.value);
  
    try {
      await vehicle_maintenance_project_backend.addMaintenance({
        name: name,
        typeVehicle: type,
        date: date,
        parts: part,
        price: price
      });
      window.location.reload();
    } catch (error) {
      console.error('Error adding maintenance:', error);
    }
  }
  

  async function fetchMaintenances() {
    try {
      const response = await vehicle_maintenance_project_backend.getMaintenances();
      
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

  async function deleteMaintenance(id) {
    try {
      const response = await vehicle_maintenance_project_backend.deleteMaintenance(id);
      if (response.Ok) {
        window.location.reload();
      } else {
        console.error('Error deleting maintenance:', response.Err);
      }
    } catch (error) {
      console.error('Error deleting maintenance:', error);
    }
  }
  
  return (
    <main>
      <h1 className="title">VehiCare</h1>
      <br />
      <br />
      <div className="add-m">
        <h2>Add Maintenance</h2>
        <div className="form-container">
          <div className="name">
            <label htmlFor="name">Name: &nbsp;</label>
            <input id="name" alt="Name" type="text"/>
          </div>
          <div className="type">
            <label htmlFor="type">Type: &nbsp;</label>
            <input id="type" alt="Type" type="text"/>
          </div>
          <div className="type">
            <label htmlFor="date">Date: &nbsp;</label>
            <input id="date" alt="Date" type="date"/>
          </div>
          <div className="part">
            <label htmlFor="part">Service Parts: &nbsp;</label>
            <input id="part" alt="Part" type="text"/>
          </div>
          <div className="price">
            <label htmlFor="price">Price: &nbsp;</label>
            <input id="price" alt="Price" type="number"/>
          </div>
        </div>
      </div>
      <h2>Maintenance List</h2>
      <ul>
        {maintenances.map((maintenance, index) => (
          <li key={index}>
            <div className="items">
            <strong>Name:</strong> {maintenance.name} &nbsp;
            </div>
            <div className="items">
            <strong>Date:</strong> {maintenance.date} &nbsp;
            </div>
            <div className="items">
            <strong>Type:</strong> {maintenance.typeVehicle} &nbsp;
            </div>
            <div className="items">
            <strong>Serviced Parts:</strong> {maintenance.parts} &nbsp;
            </div>
            <div className="items">
            <strong>Price:</strong> {maintenance.price}
            </div>
            <div className="delete">
            <button onClick={() => deleteMaintenance(maintenance.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
