import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path="/about" element={<Card />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
