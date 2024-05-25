// backend/seed.js

const mongoose = require('mongoose');
const Application = require('./models/Application'); // Adjust path as per your application structure

const mongoURI = 'mongodb+srv://murtazarizwan4505:murtaza123@cluster2.z40ocrn.mongodb.net/jobApplications'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define your dummy data
const dummyApplications = [
  { name: 'John Doe', email: 'john.doe@example.com', age: 30, dob: new Date('1994-05-25'), job: 'Developer', education: 'Bachelor\'s in Computer Science', experience: '3 years in web development' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 28, dob: new Date('1996-08-12'), job: 'Designer', education: 'Bachelor\'s in Fine Arts', experience: '5 years in graphic design' },
  // Add more dummy data as needed
];

// Insert dummy data into MongoDB
const insertDummyData = async () => {
  try {
    await Application.insertMany(dummyApplications);
    console.log('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  } finally {
    mongoose.disconnect(); // Close the MongoDB connection
  }
};

insertDummyData();
