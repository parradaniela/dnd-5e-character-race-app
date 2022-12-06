import { useState, useEffect } from 'react';
import axios from 'axios';  
import './App.css';
import Form from './components/Form.js';
import Results from './components/Results.js';
import Traits from './components/Traits.js';
import Footer from './components/Footer.js';

function App() {
  // Setting our states

  // States used for the Form.js componentn
  const [userChoice, setUserChoice] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  
  // States used in Results.js component
  const [name, setName] = useState(''); // Capital first letter
  const [age, setAge] = useState('');
  const [raceIndex, setRaceIndex] = useState(''); // all lowercase
  const [alignment, setAlignment] = useState('');
  const [sizeDesc, setSizeDesc] = useState('');
  const [langDesc, setLangDesc] = useState('')

  // State used in Traits.js component
  const [traitDetailsArray, setTraitDetailsArray] = useState([]);

  // API Calls

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
  
  // Second API call that gets the information for a specific race. We pass this to the Form component as a prop, so that the Form select options can update the state of userChoice and use it as our new endpoint
  const callSpecificEndpoint = (event) => {
    event.preventDefault();
    axios({
        url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
        updateResults(response.data);
    });
  }
  
  // Function that updates the various stateful variables, and calls the third API endpoint with the final array of endpoints
  const updateResults = (raceData) => {
    setName(raceData.name);
    setAge(raceData.age);
    setAlignment(raceData.alignment);
    setSizeDesc(raceData.size_description);
    setLangDesc(raceData.language_desc);
    setRaceIndex(raceData.index);
    // Pass an array of endpoints into another API call function
    callTraitsApiEndpoint(raceData.traits);
  }
  
  // Final API call to the endpoint that returns data about traits
  const callTraitsApiEndpoint = (array) => {
    const traitDataArray = [];
    array.forEach((endpoint) => {
        axios({
            url: `https://www.dnd5eapi.co/api/traits/${endpoint.index}`,
            method: 'GET',
            dataResponse: 'json'
          }).then((response) => {
            // Push each object into an empty array
            traitDataArray.push(response.data);
            // Update the state of traitDetailsArray with the data
          });
          setTraitDetailsArray(traitDataArray)  
        });
}

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
                name={name}
                age={age}
                raceIndex={raceIndex}
                alignment={alignment}
                sizeDesc={sizeDesc}
                langDesc={langDesc}
              />
              <Traits traitDetailsArray={traitDetailsArray} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  ); 
} 

export default App;