import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Books = () => {
  const options = [
    'one', 'two', 'three',
  ];
  const defaultOption = options[0];
  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={() => true} className="form-container">
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Add title"
          value=""
          onChange={() => true}
        />
        <input
          type="text"
          name="author"
          className="input-text"
          placeholder="Add author"
          value=""
          onChange={() => true}
        />
        <Dropdown
          options={options}
          onChange={() => true}
          value={defaultOption}
          placeholder="Select option"
        />
        <button type="submit" className="input-submit">
          Add book
        </button>
      </form>
    </div>
  );
};

export default Books;
