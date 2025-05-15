import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    axios.get('/api/emissions').then((res) => {
      setEmissions(res.data);
    });
  }, []);

  return (
    <div>
      <h1>GreenTrack - Emission Dashboard</h1>
      <ul>
        {emissions.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
