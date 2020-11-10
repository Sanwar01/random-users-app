// add package imports
const express = require('express');
const axios = require('axios');
// const cors = require('cors');
const path = require('path');

// call the express function to initialize app and initialise app with middleware
const app = express();
// app.use(cors());

// serve all files from public directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// API URLS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('/users', ((req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10')
    .then(response => {
      res.send(response.data);
    })
}))

// start express server
app.listen(8080, () => {
  console.log('server started on port 8080');
})
