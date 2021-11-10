import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from './components/Card/Card';

const books = [
  {
    title: 'Lord of the Rings',
    description: 'A book by J. R. R. Tolkien',
    categories: ['Fantasy', 'another universe', 'Middle Earth'],
  },
  {
    title: 'Harry Potter',
    description: 'Books by J.K. Rowling',
    categories: ['Fantasy', 'Youth', 'Coming of Age'],
  },
  {
    title: 'Aeneid',
    description: 'a book by Vergil',
    categories: ['Classics', 'Founding stories', 'Epic'],
  },
  {
    title: 'Iliad',
    description: 'a book by Homer',
    categories: [],
  },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      {books.map((book) => (
        <Card content={book}></Card>
      ))}
    </BrowserRouter>
  );
}

export default App;
