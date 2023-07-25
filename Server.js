const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoute");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To MongoDB..."))
    .catch((err) => console.log(err));

app.use(express.json());

app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
