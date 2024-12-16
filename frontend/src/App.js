import React, { useEffect, useState } from 'react';
import VehicleTable from './components/VehicleTable';
import { Container, TextField, Button } from '@mui/material';

function App() {
    const [vehicles, setVehicles] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const response = await fetch('http://localhost:5000/api/vehicles');
        const data = await response.json();
        setVehicles(data);
    };

    const addVehicle = async () => {
        await fetch('http://localhost:5000/api/vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, status }),
        });
        fetchVehicles();
        setName('');
        setStatus('');
    };

    return (
        <Container>
            <h1>Vehicle Management Dashboard</h1>
            <TextField
                label="Vehicle Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Status"
                variant="outlined"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={addVehicle}>
                Add Vehicle
            </Button>
            <VehicleTable vehicles={vehicles} />
        </Container>
    );
}

export default App;