# Interstellar Traveler Server

Welcome to the Interstellar Traveler Server, the backend component of our space exploration project! Our server, built with Node.js and Express.js, provides the necessary API endpoints and database management to support the Interstellar Traveler web application.

## Overview

The Interstellar Traveler Server is responsible for handling requests from the client-side application, managing user data, and interacting with the MongoDB database. It utilizes various libraries and frameworks to accomplish these tasks, including:

- Express.js for building RESTful API endpoints
- Mongoose for MongoDB object modeling and interaction
- CORS for handling Cross-Origin Resource Sharing
- Dotenv for managing environment variables
- HTTP Status Codes for standard HTTP response status codes

## Installation

To set up the Interstellar Traveler Server locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/penkalDev/serverInterstellar.git
cd serverInterstellar
npm install

# Install dependencies
npm install express mongoose cors dotenv http-status-codes
