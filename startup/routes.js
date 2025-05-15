const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const MessageRoutes = require('../Routes/messageRoutes');

module.exports = function (app) {
  const allowedOrigins = process.env.ALLOWED_ORIGIN;

  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
  app.use(express.json());
  app.use(cookieParser());

  app.use('/api/message/', MessageRoutes);

};