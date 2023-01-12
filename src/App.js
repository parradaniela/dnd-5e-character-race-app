import { useState, useEffect } from 'react';
import axios from 'axios';  
import './App.css';
import Form from './components/Form.js';
import Results from './components/Results.js';
import Traits from './components/Traits.js';
import Footer from './components/Footer.js';

function App() {
  // Setting our states

  // States used for the Form.js component
  const [userChoice, setUserChoice] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  
  // States used in Results.js component
  const [details, setDetails] = useState({
    name: '',
    age: '',
    alignment: '',
    size: '',
    language: '',
    index: '',
    traits: []
  })

  // API Calls

  // Second API call, attached to a submit event on the Form.js component, that calls a specific race's endpoint
  const callSpecificEndpoint = (event) => {
    event.preventDefault();
    axios({
        url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
      setDetails({
        name: response.data.name,
        age: response.data.age,
        alignment: response.data.alignment,
        size: response.data.size_description,
        language: response.data.language_desc,
        index: response.data.index,
        traits: response.data.traits
      })
    });
  }

  // FIrst API call, on App.js component mount, to get the array of races that will populate the Select element in the Form's JSX
  useEffect(() => {
    axios({
        url: "https://www.dnd5eapi.co/api/races/",
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
        // Sets the state of selectOptions as the array received from the API 
        setSelectOptions(response.data.results);
    });
  }, [])

  return (
    <div className="App">
      <div className="wrapper flex-center">
        <header>
          <Form
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            selectOptions={selectOptions}
            callSpecificEndpoint={callSpecificEndpoint}
          />
        </header>
        <main>
          <section className="results">
            <Results
                details={details}
              />
            <Traits

              details={details}
            />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  ); 
} 

export default App;