import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import Image from './Image.js'

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
            <h2>{name}</h2>
            <Image
              // User choice passed to Image.js
              userChoice={userChoice}
            />
            <p><span className='bold'>Age:</span> {age}</p>
            <p><span className='bold'>Alignment:</span> {alignment}</p>
            <p><span className='bold'>Size:</span> {sizeDesc}</p>
            <p><span className='bold'>Language:</span> {langDesc}</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;