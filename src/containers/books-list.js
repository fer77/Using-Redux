// This component's job will be to render a list of books.
import React, { Component } from 'react';

// To forge a connection between app.js and book-list.js we need to import React-Redux pulling a single property from there:
import { connect } from 'react-redux';
// The connect property makes the connect function available to this file.

// component:
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={ book.title }className="list-group-item">{ book.title }</li>
      );
    });
  }

// container:
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function will take the application state as an argument.  Our state contains: the array of books and the active book.
// If the state ever changes this container will re-render automatically with a new list of books.
function mapStateToProps(state) {
// The object returned here will be availabel to our component(BookList) as this.props.
// books: state.books, is the connection between Redux and this container.
  return {
    books: state.books
  };
}

// When a container file is made do not export the component(BookList), we want to export the container.
// connect takes a (function) and a (component) and produces a container.
export default connect(mapStateToProps)(BookList);
