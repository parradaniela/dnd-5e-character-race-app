import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Image from './components/Image.js'
import Results from './components/Results.js';
import Traits from './components/Traits.js';
import Footer from './components/Footer.js';

function App() {

  
  // Created a specific state for the image, because if I use userChoice, then the image will update before the user hits the submit button
  const [raceIndex, setRaceIndex] = useState(''); // lowercase
  // Create states for the data populating the results section
  const [name, setName] = useState(''); // Capital first letter
  const [age, setAge] = useState('');
  const [alignment, setAlignment] = useState('');
  const [sizeDesc, setSizeDesc] = useState('');
  const [langDesc, setLangDesc] = useState('')
  // Create states for the data populating the traits section
  const [traitsArray, setTraitsArray] = useState([]);
  

  return (
    <div className="App">
      <div className="wrapper flex-center">
        <header>
          <h1>DnD 5e Character Race Information</h1>
          <Form
            setName={setName}
            setAge={setAge}
            setAlignment={setAlignment}
            setSizeDesc={setSizeDesc}
            setLangDesc={setLangDesc}
            setRaceIndex={setRaceIndex}
            setTraitsArray={setTraitsArray}
          />
        </header>
        <main>
          <section className="results">
            <div className="results-main">
              <div className="results-top">
                <h2>{name}</h2>
                <Image raceIndex={raceIndex} />
              </div>
              <Results
                age={age}
                alignment={alignment}
                sizeDesc={sizeDesc}
                langDesc={langDesc}
              />
            </div>
            <div className="results-secondary">
              <Traits traitsArray={traitsArray} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;