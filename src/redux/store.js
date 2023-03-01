import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default configureStore;
