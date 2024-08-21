require('dotenv').config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect")
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI
const app = express();
const notFound = require("./middleware/notFound")
const errorHandlerMiddleware = require("./middleware/errorHandler")


// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(MONGODB_URI)
    app.listen(port, () => console.log(`Server up and running on port ${port} localhost:3000`));
  } catch (error) {
    console.log(error);
  }
}
start()