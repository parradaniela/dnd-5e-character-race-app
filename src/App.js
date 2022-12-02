import { useState } from 'react';
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
      <div className="wrapper flex-center">
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
          <section className="results">
            <h2>{name}</h2>
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