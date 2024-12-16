const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Get all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new vehicle
router.post('/', async (req, res) => {
    const vehicle = new Vehicle({
        name: req.body.name,
        status: req.body.status,
        lastUpdated: new Date(),
    });
    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update vehicle status
router.patch('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        vehicle.status = req.body.status;
        vehicle.lastUpdated = new Date();
        await vehicle.save();
        res.json(vehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;