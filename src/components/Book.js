import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const Book = ({ book }) => {
  const { id, title, author } = book;
  return (
    <div>
      <span>{id}</span>
      <div>
        <span>Action</span>
        <h3>{title}</h3>
        <span>{author}</span>
        <div>
          <ul>
            <li>
              <button type="button">Comment</button>
            </li>
            <li>
              <button type="button">Remove</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Chart />
        <div>
          <span>60%</span>
          <span>Completed</span>
        </div>
      </div>
      <div>
        <h4>Current chapter</h4>
        <span>Chapter 20</span>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.string.isRequired,
};
export default Book;
