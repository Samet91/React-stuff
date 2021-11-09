import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main>Home</main>} />

        <Route path="/about" element={<main>About</main>} />

        <Route path="/me" element={<main>About me</main>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
