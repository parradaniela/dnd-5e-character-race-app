import { useState } from 'react';
// import axios from 'axios';  
import './App.css';
import Form from './Form.js';

function App() {

  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [alignment, setAlignment] = useState('');
  const [sizeDesc, setSizeDesc] = useState('');
  const [langDesc, setLangDesc] = useState('')

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>DnD 5e Character Race Information</h1>
          <Form
            setName={setName}
            setAge={setAge}
            setAlignment={setAlignment}
            setSizeDesc={setSizeDesc}
            setLangDesc={setLangDesc}
          />
        </header>
        <main>
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <p>Alignment: {alignment}</p>
          <p>Size: {sizeDesc}</p>
          <p>Language: {langDesc}</p>
        </main>
      </div>
    </div>
  );
}

export default App;