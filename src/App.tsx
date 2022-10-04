import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
  }, []);

  return ready ? <AppRoutes /> : <p>teste</p>;
}

export default App;
