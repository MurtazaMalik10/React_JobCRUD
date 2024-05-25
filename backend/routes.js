const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Application = require('./models/Application'); // Adjust path as per your application structure

// GET all applications
router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
});

// GET application by ID
router.get('/applications/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid application ID format' });
  }

  try {
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching application', error });
  }
});

// POST new application
router.post('/applications', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error saving application', error });
  }
});

// PATCH (update) application by ID
router.patch('/applications/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid application ID format' });
  }

  try {
    const updatedApplication = await Application.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application', error });
  }
});

// DELETE application by ID
router.delete('/applications/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid application ID format' });
  }

  try {
    await Application.findByIdAndDelete(id);
    res.status(200).json({ message: 'Application deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application', error });
  }
});

module.exports = router;
