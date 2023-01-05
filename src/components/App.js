import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Nav from './Nav';
import Books from './Books';
import Categories from './Categories';
import Error from './Error';

const App = () => (
  <BrowserRouter>
    <div className="header">
      <div className="container">
        <Nav />
      </div>
    </div>
    <div className="body">
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/books" replace />}
          />
          <Route
            path="/books"
            element={<Books />}
            exact
          />
          <Route
            path="/categories"
            element={<Categories />}
            exact
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
