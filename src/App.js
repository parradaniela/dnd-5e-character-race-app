import { useState } from 'react';
import './App.css';
import { ApiDataContext } from './Contexts/ApiDataContext';
import Header from './components/header/Header.js'
import Form from './components/header/Form.js';
import Main from './components/main/Main.js';
import Tabs from './components/main/top/Tabs';
import ResultsTop from './components/main/top/ResultsTop.js';
import Image from './components/main/top/Image.js';
import AccordionGeneral from './components/main/bottom/AccordionGeneral.js';
import ResultsBottom from './components/main/bottom/ResultsBottom.js';
import Traits from './components/main/bottom/Traits.js';
import Footer from './components/Footer.js';

function App() {
  
  // Setting states
  const [userChoice, setUserChoice] = useState('');
  
  const [accordionData, setAccordionData] = useState({});
  const [race, setRace] = useState('');
  const [traitsArray, setTraitsArray] = useState([]);
  const [subracesArray, setSubracesArray] = useState([])
  const [proficienciesArray, setProficienciesArray] = useState([])

  return (
    <div className="App">
      <div className="wrapper flex-center">
        <ApiDataContext.Provider
          value={
            {
              accordionData,
              traitsArray,
              subracesArray,
              proficienciesArray, 
              setAccordionData,
              setTraitsArray,
              setSubracesArray,
              setProficienciesArray,
              setRace
            }
          }
        >
          <Header>
            <Form
              userChoice={userChoice}
              setUserChoice={setUserChoice}
            />
          </Header>
          <Tabs userChoice={userChoice} race={race}>
          </Tabs>
        </ApiDataContext.Provider>
        <Main race={race}>
          <ResultsTop race={race}>
            <Image
              race={race}
              userChoice={userChoice}
            />  
            
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