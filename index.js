const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const olaRoutes = require("./routes/olaRoutes");
app.use(express.json());
app.use("/api/v1", olaRoutes);


app.use((req, res, next) => {
  res.status(404).send({ message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
