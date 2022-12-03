import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import Image from './Image.js'
import Results from './Results.js';
import Traits from './Traits.js';
import Footer from './Footer.js';

function App() {

  // Create a state for user choice because I need to pass it to both Form.js and Image.js as props
  const [userChoice, setUserChoice] = useState('');
  // Create states for the data populating the results section
  const [name, setName] = useState('');
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
            // User choice passed to Form.js
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            // Separating
            setName={setName}
            setAge={setAge}
            setAlignment={setAlignment}
            setSizeDesc={setSizeDesc}
            setLangDesc={setLangDesc}
            setTraitsArray={setTraitsArray}
          />
        </header>
        <main>
          <section className="results">
            <div className="results-top">
              <h2>{name}</h2>
              <Image userChoice={userChoice} />
            </div>
            <Results
              age={age}
              alignment={alignment}
              sizeDesc={sizeDesc}
              langDesc={langDesc}
            />
            {/* <Traits traitsArray={traitsArray} /> */}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;