import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import Books from '../Books/Books';

const Home = () => (
  <div className="add-book-container">
    <Books />
    <BookForm />
  </div>
);

export default Home;
