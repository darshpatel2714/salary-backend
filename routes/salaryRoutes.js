const express = require('express');
const router = express.Router();
const Salary = require('../models/Salary');

router.post('/salary', async (req, res) => {
    try {
        const salary = new Salary(req.body);
        await salary.save();
        res.status(201).json(salary);
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error code
            res.status(400).json({ message: "Data for this date already exists." });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
});


router.get('/salary/:year/:month', async (req, res) => {
    const { year, month } = req.params;
    try {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 1);

        const salaries = await Salary.find({
            date: { $gte: start, $lt: end }
        }).sort({ date: 1 });
        
        res.json(salaries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;