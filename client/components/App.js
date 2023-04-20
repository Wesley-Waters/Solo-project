import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from './home';
import DogPics from './dogPics';
import JobListings from './jobListing'

function App () {
    return (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dogPics' element={<DogPics />}/>
          <Route path='/jobListings' element={<JobListings />}/>
        </Routes>
    )
}

export default App;