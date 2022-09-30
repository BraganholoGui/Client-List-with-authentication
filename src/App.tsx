import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import AppRoutes from './routes';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
    console.log(localStorage)
  }, []);

  return (
    <div className="App">
        <AppRoutes/>
    </div>
  );
}

export default App;
