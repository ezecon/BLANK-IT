const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb+srv://mdeconozzama:21JcFAxOPQLwJJhY@cluster0.epjlx.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


app.use('/api/course-purchases', require('./routes/userRoutes'));

app.use('/api/course', require('./routes/courseRoutes copy'));

app.use('/api/topic', require('./routes/topicRoute'));

app.use('/api/resouce', require('./routes/resourceRoute'));


app.listen(port, () => console.log(`Server running on port ${port}`));
