# VehiCare
## Brief Explanation
This documentation provides an overview of a dapp to track users vehicle maintenance history called Vehicare. The system's backend is built using TypeScript and the Azle framework, while the frontend is developed using the react framework. Vehicare helps users track their vehicles maintenance history.

## Installation
1. Clone the reposeitory
  ```
  git clone https://github.com/SamuelYudiGunawan/VehiCare.git
  ```
2. Install dependencies
  ```
   npm install
  ``` 
3. Start the IC local development environment
  ``` 
   dfx start --background --clean
  ```
4. Deploy the canisters to the local development environment
  ```
   npm run setup
  ```
5. Start the frontend server
  ```
  npm start
  ```
## Functions
1. addMaintenance
   - Description: Adds a new maintenance record to the system.
   - Parameters:
     - payload: `MaintenancePayload` object containing the details of the vehicle maintenance.
2. getMaintenances
   - Description: Retrieves all maintenance records stored in the system.
   - Parameters: -
3. getMaintenance
   - Description: Retrieves a specific maintenance record stored in the system.
   - Parameters:
     - `id`: The ID of the vehicle maintenance record to retrieve.
4. getMaintenancesByName
   - Description: Retrieves all maintenance records stored in the system based on name search.
   - Parameters:
     - `name`: The name of the vehicle maintenance record to retrieve.
5. getMaintenancesByType
    - Description: Retrieves all maintenance records stored in the system based on type search.
    - Parameters:
      - `typeVehicle`: The type of the vehicle maintenance record to retrieve
6. getAveragePriceByName
    - Description: Retrieves average cost of maintenance records stored in the system based on name search.
    - Parameters:
      - `name`: The name of the vehicle maintenance record to retrieve.
7. getAveragePriceByType
    - Description: Retrieves average cost of maintenance records stored in the system based on type search.
    - Parameters:
      - `typeVehicle`: The type of the vehicle maintenance record to retrieve.
8. deleteMaintenance
    - Description: Delete a specific maintenance record from the system by ID.
    - Parameters:
      - `id`: The ID of the vehicle maintenance record to delete.
9. updateMaintenance
    - Description: Updates an existing specific maintenance record from the system with new data by ID.
    - Parameters:
      - `id`: The ID of the vehicle maintenance record to update.
      - `payload`: `MaintenancePayload` object containing the details of the vehicle maintenance.
## Note
1. Only addMaintenance, getMaintenances, and deleteMaintenances are availble on the website (frontend)
2. The others function perfectly work with `dfx canister call vehicle_maintenance_project_backend [function_name]`
