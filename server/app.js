require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");
const errHandler = require("./middleware/errHandler");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errHandler);

module.exports = app;