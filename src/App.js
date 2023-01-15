import { useState, useEffect } from 'react';
import axios from 'axios';  
import './App.css';
import Header from './components/header/Header.js'
import Form from './components/header/Form.js';
import Main from './components/main/Main.js';
import AccordionGeneral from './components/main/bottom/AccordionGeneral.js';
import ResultsTop from './components/main/top/ResultsTop.js';
import ResultsBottom from './components/main/bottom/ResultsBottom.js';
import Image from './components/main/top/Image.js';
import Traits from './components/main/bottom/Traits.js';
import Footer from './components/Footer.js';

function App() {
  
  // Setting states
  const [userChoice, setUserChoice] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const [accordionData, setAccordionData] = useState({});
  const [race, setRace] = useState('');
  const [traitsArray, setTraitsArray] = useState([]);

  // API Calls

  // API call attached to a submit event on the Form.js component, that calls a specific race's endpoint and updates a number of states
  const formSubmitApiCall = (event) => {
    event.preventDefault();
    axios({
        url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
      setAccordionData({
        age: response.data.age,
        alignment: response.data.alignment,
        size: response.data.size_description,
        language: response.data.language_desc 
      })
      setRace(response.data.index)
      setTraitsArray(response.data.traits)
      })
  }

  // FIrst API call, on App.js component mount, to get the array of races that will populate the Select element in the Form's JSX
  useEffect(() => {
    axios({
        url: "https://www.dnd5eapi.co/api/races/",
        method: "GET",
        dataResponse: "json"
    }).then((response) => { 
        setSelectOptions(response.data.results);
    });
  }, [])

  return (
    <div className="App">
      <div className="wrapper flex-center">
        <Header>
          <Form
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            selectOptions={selectOptions}
            formSubmitApiCall={formSubmitApiCall}
          />
        </Header>
        <Main race={race}>
          <ResultsTop race={race}>
            <Image
              race={race}
              userChoice={userChoice}
            />  
            <AccordionGeneral accordionData={accordionData} />
          </ResultsTop>
          <ResultsBottom>
            <Traits traitsArray={traitsArray} />
          </ResultsBottom>
        </Main>
      </div>
      <Footer />
    </div>
  ); 
} 

export default App;