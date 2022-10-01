import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AppRoutes from './routes';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
    console.log(localStorage)
  }, []);

  return ready ? <AppRoutes /> : <p>teste</p>;
}

export default App;
