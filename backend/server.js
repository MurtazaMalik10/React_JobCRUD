const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Assuming your routes are defined in a separate file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const mongoURI = 'mongodb+srv://murtazarizwan4505:murtaza123@cluster2.z40ocrn.mongodb.net/jobApplications';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes defined in routes.js
app.use('/api', routes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Job Application API');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
