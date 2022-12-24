import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const books = [{ id: 1, title: 'title1', author: 'author1' },
    { id: 2, title: 'title2', author: 'author2' },
    { id: 3, title: 'title3', author: 'author3' },
    { id: 4, title: 'title4', author: 'author4' }];
  return (
    <div>
      <div>
        {books.map((book) => <Book key={book.id} book={book} />)}
      </div>
      <AddNewBook />
    </div>
  );
};

export default Books;
