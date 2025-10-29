// server.js
// Main entry point for the RemitBee Backend Developer Task

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mount user routes
app.use('/users', userRoutes);

// Handle 404 - route not found
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error-handling middleware (for catching all internal errors)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
