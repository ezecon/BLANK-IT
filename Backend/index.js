const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/course-purchases', userRoutes);



module.exports = app;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
