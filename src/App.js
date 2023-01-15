import { useState, useEffect } from 'react';
import axios from 'axios';  
import './App.css';
import Header from './components/header/Header.js'
import Form from './components/header/Form.js';
import Main from './components/main/Main.js';
import GeneralRaceInfo from './components/main/bottom/GeneralRaceInfo.js';
import ResultsTop from './components/main/top/ResultsTop.js';
import ResultsBottom from './components/main/bottom/ResultsBottom.js';
import Image from './components/main/top/Image.js';
import Traits from './components/main/bottom/Traits.js';
import Footer from './components/Footer.js';

function App() {
  
  // Setting our states
  const [userChoice, setUserChoice] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const [accordionData, setAccordionData] = useState({})
  const [index, setIndex] = useState('')
  const [traitsArray, setTraitsArray] = useState([])

  // API Calls

  // Second API call, attached to a submit event on the Form.js component, that calls a specific race's endpoint
  const formSubmitApiCall = (event) => {
    event.preventDefault();
    axios({
        url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
        method: "GET",
        dataResponse: "json"
    }).then((response) => {
      // console.log(response);
      setAccordionData({
        name: response.data.name,
        age: response.data.age,
        alignment: response.data.alignment,
        size: response.data.size_description,
        language: response.data.language_desc 
      })
      setIndex(response.data.index)
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
        <Main>
          <ResultsTop accordionData={accordionData}>
            <Image
              index={index}
              userChoice={userChoice}
            />  
            <GeneralRaceInfo accordionData={accordionData} />
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