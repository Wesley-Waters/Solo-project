import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

export default function JobListings() {

  // Get the current state and store in variable
  const [jobs, setJobs] = useState();

  // Fetch the joblistings based on the current state
  useEffect( ()=> {
    fetch('/joblisting')
    .then(data => data.json())
    .then(data => {
      console.log('data',data)
      setJobs(data)
    })
  },[])
  
  // Array of jobs that will be displayed
  const jobsFound = [];
  if (jobs) {
  // Iterate through jobs
    for (const job of jobs) {
      jobsFound.push(
      <div className='jobDiv'>
        <p className='jobTitle'>{job.MatchedObjectDescriptor.PositionTitle}</p>
        <p>{job.MatchedObjectDescriptor.OrganizationName}</p>
        <p>{job.MatchedObjectDescriptor.PositionLocationDisplay}</p>
      </div>)
    }
  }

  return (
    <div id='joblisting'>
      {jobsFound}
    </div>
  )
}