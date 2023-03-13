require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/search"));

app.listen(port, () => console.log(`Server running on port ${port}`));
