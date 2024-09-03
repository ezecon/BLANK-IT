const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/course-purchases', userRoutes);

app.use(errorHandler);

module.exports = app;
