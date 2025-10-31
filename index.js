const express = require("express");
const app = express();
const port = 3000;

const olaRoutes = require("./routes/olaRoutes");
app.use("/ola", olaRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
