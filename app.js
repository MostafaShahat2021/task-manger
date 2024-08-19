const express = require("express");
const tasks = require("./routes/tasks");
const port = 3000;
const app = express();

// Middleware
app.use(express.json());


// Routes
app.get("/", (req, res) => {
  res.send("<h1>Task Manger App!</h1>")
})

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Server rup and running on port ${port} localhost:3000`);
});