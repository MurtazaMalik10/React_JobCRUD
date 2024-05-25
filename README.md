# Job Application Management System

This project is a web application for managing job applications, built using React.js for the frontend and Node.js with Express and MongoDB for the backend.

## Features

- **View Applications**: Display a list of job applications with details such as applicant name, job title, age, and experience.
- **Create Application**: Allow users to submit new job applications via a form.
- **Edit Application**: Update existing job applications.
- **Delete Application**: Remove job applications from the system.

## Technologies Used

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas used in deployment)
- **Styling**: Bootstrap (for UI components), CSS (for custom styling)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (or local MongoDB setup)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/job-application-system.git
   cd job-application-system
2. **Install dependencies:**
   # Install server dependencies
      cd server
      npm install

# Install client dependencies
      cd ../client
      npm install
3. **Run the application:**
   # Start the server (from the server directory)
      cd ../server
      npm start

# Start the client (from the client directory)
      cd ../client
      npm start

## API Endpoints (Server)

- **GET** `/api/applications`: Retrieve all job applications.
- **GET** `/api/applications/:id`: Retrieve a job application by ID.
- **POST** `/api/applications`: Create a new job application.
- **PATCH** `/api/applications/:id`: Update a job application by ID.
- **DELETE** `/api/applications/:id`: Delete a job application by ID.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

