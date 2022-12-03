import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import Image from './Image.js'
import Results from './Results.js';
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
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;