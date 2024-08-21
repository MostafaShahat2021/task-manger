# Task Manager

A simple task manager application built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete tasks
- Error handling middleware
- Asynchronous route handling

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:MostafaShahat2021/task-manger.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-manager
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
   ```

## Running the Application

1. Start the server:
   ```sh
   npm start
   ```
2. The server will run on port `3000` by default. You can access the application at `http://localhost:3000`.

## Usage

- Use a tool like Postman to interact with the API endpoints for creating, reading, updating, and deleting tasks.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
