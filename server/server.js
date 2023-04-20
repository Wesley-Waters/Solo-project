const express = require('express');
const path = require('path')
const app = express();
const PORT = 5000;
const jobUsaApiController = require('./controllers/jobUsa.js');

// Parse json from incoming requests
app.use(express.json());
// statically serve everything in the build folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));
// Send html page when page is loaded
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});
// Send css file whne requested
app.get('/styles.css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/styles.css'))
});

// Handle request to job listing
app.get('/joblisting', jobUsaApiController.getJobs, (req, res) => {
  res.status(200).json(res.locals.jobUsaData)
})

// Global request handler
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Configure express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj)
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);

module.exports = app;