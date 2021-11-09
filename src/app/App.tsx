import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      Header
      <Link to="/about">--About link--</Link>
      <Routes>
        <Route path="/" element={<main>Home</main>} />

        <Route path="/about" element={<main>About</main>} />

        <Route path="/me" element={<Stuff />}>
          <Route path=":stuff" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
