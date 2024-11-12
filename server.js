const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const salaryRoutes = require('./routes/salaryRoutes');

dotenv.config();
connectDB();

const app = express();

// Allow requests only from your frontend's origin
app.use(cors({
  origin: 'https://salary-frontend.onrender.com'
}));

app.use(express.json());
app.use('/api', salaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
