const express = require("express");
const helmet = require("helmet");

const healthRoute = require("./routes/health");

const app = express();

app.use(express.json());
app.use(helmet());

app.use("/health", healthRoute);

module.exports = app;