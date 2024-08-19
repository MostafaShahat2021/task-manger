const express = require("express");
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server rup and running on port ${port} localhost:3000`);
});