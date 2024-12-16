import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const VehicleTable = ({ vehicles }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Vehicle Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Last Updated</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {vehicles.map((vehicle) => (
                        <TableRow key={vehicle._id}>
                            <TableCell>{vehicle.name}</TableCell>
                            <TableCell>{vehicle.status}</TableCell>
                            <TableCell>{new Date(vehicle.lastUpdated).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VehicleTable;