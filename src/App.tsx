import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  useEffect(() => {
    fetch('/ping')
      .then(resp => resp.text())
      .then(setApiMessage)
  }, [setApiMessage]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <fieldset>
          <legend>Message from server:</legend>
          {apiMessage && <pre>
            {apiMessage}
          </pre>}
        </fieldset>
      </header>
    </div>
  );
}

export default App;
