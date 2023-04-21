import React, { useState, useEffect } from "react";

export default function JobSearchBar(props) {

  // State that represents the value of both inputs
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleButtonClick = () => {
    // Store keyword and location in props
    props.getJobs(keyword, location);
    // Reset state
    setKeyword('');
    setLocation('');
    return;
  }

  return (
    <div id='jobSearchBar'>
      <label htmlFor="#getKeyword">Keyword: </label>
      <input id='getKeyword' onChange={e => setKeyword(e.target.value)} value={keyword}></input>  
      <label htmlFor="#getLocation">Location: </label>
      <input id='getLocation' onChange={e => setLocation(e.target.value)} value={location}></input>
      <button onClick={handleButtonClick}>Search</button>
    </div>
  )
}