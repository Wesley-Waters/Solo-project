import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="header">
    <h1>Welcome to Job Finder 5000!</h1>
    <div id="welcomeBox">
      <p>Ready to change your life?</p>
      <div>
        <Link to='/dogPics'>
          <button id="noButton">Not yet</button>
        </Link>
        <Link to='/jobListings'>
          <button id="yesButton">$ Yes $</button>
        </Link>
      </div>
    </div>
  </div>
  );
}
