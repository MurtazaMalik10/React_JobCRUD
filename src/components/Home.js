import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component
import './Home.css'; // Import your CSS file for Home component

const Home = () => {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    email: '',
    age: '',
    dob: '',
    job: '',
    education: '',
    experience: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/applications');
      setApplications(result.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/applications/${id}`);
      setApplications(applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error('Error deleting application', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/applications/${id}`);
      const { _id, name, email, age, dob, job, education, experience } = response.data;
      setEditFormData({
        id: _id,
        name,
        email,
        age: age.toString(),
        dob: dob.substring(0, 10), // Assuming dob is stored as YYYY-MM-DD
        job,
        education,
        experience
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching application for edit', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditFormData({
      id: '',
      name: '',
      email: '',
      age: '',
      dob: '',
      job: '',
      education: '',
      experience: ''
    });
  };

  const handleChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/applications/${editFormData.id}`, editFormData);
      setShowModal(false);
      setApplications(applications.map(app => app._id === editFormData.id ? editFormData : app));
    } catch (error) {
      console.error('Error updating application', error);
    }
  };

  return (
    <div className="Home">
      <h1>Job Applications</h1>
      <ul>
  {applications.map((app) => (
    <li key={app._id}>
      <div>
        <span>{app.name} - {app.job}</span><br />
        <span>Age: {app.age}, Experience: {app.experience}</span>
        <div className="actions">
          <button onClick={() => handleEdit(app._id)}>Edit</button>
          <button onClick={() => handleDelete(app._id)}>Delete</button>
        </div>
      </div>
    </li>
  ))}
</ul>

      <Link to="/apply" className="button">Create New Application</Link>

      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Edit Application</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Applicant Name</label>
            <input type="text" id="name" name="name" value={editFormData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={editFormData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={editFormData.age} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={editFormData.dob} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="job">Job Selection</label>
            <select id="job" name="job" value={editFormData.job} onChange={handleChange} required>
              <option value="">Select a job</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <input type="text" id="education" name="education" value={editFormData.education} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input type="text" id="experience" name="experience" value={editFormData.experience} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit" className="button">Update</button>
            <button type="button" onClick={handleCloseModal} className="button">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
