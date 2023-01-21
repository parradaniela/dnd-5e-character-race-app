import { useState } from 'react';
import './css/variables.css';
import './css/setup.css';
import './css/animations.css';
import './css/global.css';
import './css/strippingStyles.css';
import './css/typography.css';
import './css/form.css';
import './css/image.css';
import './css/tabs.css';
import './css/accordion.css';
import './css/footer.css';
import './css/mediaQueries.css';
import { ApiDataContext } from './Contexts/ApiDataContext';
import Header from './components/header/Header.js'
import Form from './components/header/Form.js';
import Main from './components/main/Main.js';
import Tabs from './components/main/tabs/Tabs';
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
      <div className="wrapper body-flex-center">
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
          <Main race={race}>  
            <Tabs race={race} />
          </Main>
        </ApiDataContext.Provider>
      </div>
      <Footer />
    </div>
  ); 
} 

export default App;