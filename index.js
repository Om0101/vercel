// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()
// const path = require('path');
// const characterRouter = require('./routes/starRouter')

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'build')));
// app.use('/api',characterRouter.router)


// const port = process.env.PORT || 9000
// app.listen(port, () => {
//     console.log("server started");
//  });

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const characterRouter = require('./routes/starRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/api', characterRouter.router);

// Serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Server started");
});
