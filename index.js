const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const characterRouter = require('./routes/starRouter'); // Assuming this is where the API logic is

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
app.use('/api', characterRouter.router);

// Serve the front-end application (index.html) for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log('Server started');
});
