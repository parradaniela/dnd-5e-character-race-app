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
  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');
  const [raceIndex, setRaceIndex] = useState('');
  const [alignment, setAlignment] = useState('');
  const [sizeDesc, setSizeDesc] = useState('');
  const [langDesc, setLangDesc] = useState('')

  // State used in Traits.js component
  const [traitDetailsArray, setTraitDetailsArray] = useState([]);

  // API Calls

  // Note that they are technically in reverse order here, because I was advised to write the function definitions before they were actually called. So the order of the API calls goes from bottom to top (though at this time the final API call is not working as intended)

  // A function that takes an array of objects from the API call that happens in callSpecificEndpoint, and loops through the objects in the array to find new endpoints for a race's unique traits, then updates the traitDetailsArray state to pass it as a prop to the Traits component 
  // const callTraitsApiEndpoint = (array) => {
  //   const traitDataArray = [];
  //   array.forEach((endpoint) => {
  //       axios({
  //           url: `https://www.dnd5eapi.co/api/traits/${endpoint.index}`,
  //           method: 'GET',
  //           dataResponse: 'json'
  //       }).then((response) => {
  //           console.log(response);
  //           // Push each object into an empty array
  //           traitDataArray.push(response.data);
  //           // Update the state of traitDetailsArray with the data
  //         });
  //         setTraitDetailsArray(traitDataArray)  
  //       }); 
  // }

  // A function that updates different states using data received from the callSpecificEndpoint function, then passes them as props to the Results component for display 
  const updateResults = (raceData) => {
    setName(raceData.name);
    setAge(raceData.age);
    setAlignment(raceData.alignment);
    setSizeDesc(raceData.size_description);
    setLangDesc(raceData.language_desc);
    setRaceIndex(raceData.index);
    setTraitDetailsArray(raceData.traits)
  }

  // Second API call, attached to a submit event on the Form.js component, that calls a specific race's endpoint
  const callSpecificEndpoint = (event) => {
    event.preventDefault();
    axios({
        url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
      // console.log(response.data);
      updateResults(response.data);
      // callTraitsApiEndpoint(response.data.traits);
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