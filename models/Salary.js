const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    date: { type: Date, unique: true, required: true, default: Date.now }, // Unique date
    // date: { type: Date, default: Date.now },
    salaryRate: { type: Number, required: true },
    inTime: String,
    outTime: String,
    regularHours: Number,
    overtimeHours: Number,
    regularHoursAmount: Number,
    overtimeHoursAmount: Number,
    totalAmount: Number,
    pf: Number,
    totalPf: Number,
    totalSalary: Number,

});

module.exports = mongoose.model('Salary', salarySchema);
