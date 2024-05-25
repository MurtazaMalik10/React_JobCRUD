import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobApplicationForm from './components/JobApplicationForm';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<JobApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
