import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'



const App = () => {
  return (
    <Router>
      <Navbar/>
    </Router>

//search bar, need to add API info
    // <div id='buttons'>
    //   <p>
    //     <label>Enter your desired hobby search by starting the search with 'How to'
    //       <input name="query" type="text" pattern="How to" placeholder="how to..." aria-label="search" size="8" /><button id="search-button" onclick="App()">Search</button>
    //     </label>
    //   </p>
    // </div>
   )
   }
  

export default App
