import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import your CSS file

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dob: '',
    job: '',
    education: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      console.log('Application submitted', response.data);
      // Optionally handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting application', error);
    }
  };

  return (
    <div className="JobApplicationForm">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Applicant Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="job">Job Selection</label>
          <select id="job" name="job" value={formData.job} onChange={handleChange} required>
            <option value="">Select a job</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div>
          <label htmlFor="education">Education</label>
          <input type="text" id="education" name="education" value={formData.education} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="experience">Experience</label>
          <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
