import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import Books from '../Books/Books';

const Home = () => (
  <div className="addbook-container">
    <Books />
    <BookForm />
  </div>
);

export default Home;
