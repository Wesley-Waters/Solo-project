const fetch = require('node-fetch');

// Middleware object for all job usa requests
const jobUsaApiController = {};
// host, user email, and authentication key
const host = 'data.usajobs.gov';  
const userAgent = 'wesman7777@gmail.com';  
const authKey = 'dIrI/cKcdh2SC1TLPwA7kQI4rz24k5KZBUTVVypj9fQ=';   

// Middleware for getting a list of jobs from job usa website
jobUsaApiController.getJobs = (req, res, next) => {
  // Job search url
  let jobsearch = 'https://data.usajobs.gov/api/search';
  // If keyword exists, add it to search
  let keyword = '?Keyword=software%20Developer';
  let location = '?LocationName=Los%20angeles,%20CA'
  fetch(jobsearch + keyword, {
    method: 'GET',
    headers: {          
      "Host": host,          
      "User-Agent": userAgent,          
      "Authorization-Key": authKey      
    }  
  })
  .then(data => data.json())
  .then(data => {
    // If no search results are found, change req locals jobusadata to a string that says no results found
    if (data.SearchResult.SearchResultCount === 0) {
      res.locals.jobUsaData = 'no results found';
      return next()
    }
    console.log(data.SearchResult.SearchResultItems)
    // Store data in req locals and invoke next
    console.log(data.SearchResult.SearchResultCount)
    res.locals.jobUsaData = data.SearchResult.SearchResultItems;
    return next()
  })
  .catch(err => next({err: `jobUsaApiController.getJobs: ERROR: ${err}`}))
}

module.exports = jobUsaApiController;