import React from 'react';
import { Component } from 'react';
import BookList from '../containers/books-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
//Show the book list in book-list.js
