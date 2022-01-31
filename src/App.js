import './App.css';
import React from 'react';

let location = document.getElementById("test")

const App = () => {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // } else {
  //   location.innerHTML = "Geolocation not supported"
  // }

  return (
    <div id='buttons'>
      <p>
        <label>Enter your desired hobby search by starting the search with 'How to'
          <input name="query" type="text" pattern="How to" placeholder="how to..." aria-label="search" size="8" /><button id="search-button" onclick="App()">Search</button>
        </label>
      </p>
    </div>

    
  );
}

function showPosition(position) {
  location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}


export default App
