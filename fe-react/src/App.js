import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Response from Flask Server:</p>
        <p>IP Address: {response.ip_address}</p>
        <p>Message: {response.message}</p>
      </header>
    </div>
  );
}

export default App;
