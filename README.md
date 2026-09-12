# FullStack Chatbot Task

A full-stack chatbot and enquiry management application developed using React, TypeScript, Node.js, Express.js, and MongoDB. The application allows users to interact with a chatbot, submit enquiries as a Student or Customer, and provides an admin dashboard to manage submitted enquiries.

# Project Description

This project demonstrates a complete full-stack application where the frontend communicates with a REST API backend, and the backend manages enquiry data stored in MongoDB.

Users can interact with the chatbot and submit an enquiry. The submitted information is sent to the backend through REST APIs and stored in MongoDB using Mongoose.

The admin dashboard allows an administrator to view enquiries, search enquiries by Student or Customer, filter enquiries, update their status, and delete enquiries.

The application follows the architecture:

Frontend → REST API → Backend → MongoDB

# Features

## User Features

- Interactive chatbot
- Enquiry submission form
- Student / Customer enquiry selection
- Form validation
- Success and error handling
- Responsive user interface

## Admin Features

- View all enquiries
- Filter enquiries by Student or Customer
- Update enquiry status
- Delete enquiries
- View enquiry details
- Error handling for failed API requests

## Backend Features

- RESTful API
- Express.js routing
- Controller-based backend structure
- MongoDB database integration
- Mongoose schema and model
- CRUD operations
- Request validation
- Error handling

---

# Technologies Used

## Frontend

- React
- TypeScript
- Vite
- HTML5
- CSS / Tailwind CSS
- JavaScript / TypeScript

## Backend

- Node.js
- Express.js
- REST API
- JavaScript
- CORS
- dotenv

## Database

- MongoDB
- Mongoose

## Development Tools

- Visual Studio Code
- Postman
- Git
- GitHub
- MongoDB Atlas

---

## Application Architecture

┌─────────────────────────┐
│ Frontend │
│ React + TypeScript │
└────────────┬────────────┘
│
│ HTTP / REST API
▼
┌─────────────────────────┐
│ Backend │
│ Node.js + Express.js │
└────────────┬────────────┘
│
│ Mongoose
▼
┌─────────────────────────┐
│ MongoDB │
│ MongoDB Atlas │
└─────────────────────────┘


The React frontend sends HTTP requests to the Express.js backend. The backend processes the requests and performs database operations using Mongoose. MongoDB Atlas is used to store enquiry records.


# Environment Variables

.env file stores the mongodb connection string for database connection

# Database Setup

This project uses MongoDB Atlas as the database. From MongoDB Atlas, the connection string is added it to the backend `.env` file:

# API Endpoints

The backend provides REST API endpoints for managing enquiries.
Create Enquiry: POST /api/enquiries
Get All Enquiries: GET /api/enquiries
Update Enquiry Status: PUT /api/enquiries/:id
Delete Enquiry: DELETE /api/enquiries/:id

