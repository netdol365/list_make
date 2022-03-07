const express = require('express');
const app = express();

const mysqlRouter = require('./config/DbLoader');
app.use('/serverTest',mysqlRouter);
