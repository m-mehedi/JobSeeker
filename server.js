// const express = require("express");
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

// middleware
notFoundMiddleware

app.get("/", (req, res) => {
    throw new Error('error')
  res.send("Welcome!");
});
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
