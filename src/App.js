import { useEffect, useState } from 'react';
import axios from 'axios';  
import './App.css';

function App() {

  useEffect(() => {
    axios({
      url: "https://www.dnd5eapi.co/api/races/dragonborn",
      method: "GET",
      dataResponse: "json"
    }).then((response) => {
      console.log(response.data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
