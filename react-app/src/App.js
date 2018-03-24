import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookItem from './BookItem.js';
import AddItem from './AddItem.js';

const books1 = [{ name: "Red and black", price: 34 }, { name: "The great gitsbay", price: 33 }];
localStorage.setItem('books', JSON.stringify(books1));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: JSON.parse(localStorage.getItem('books'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSave = this.onEditSave.bind(this);
  }
  componentWillMount() {
    this.getBooks();
  }
  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(j => this.setState({
      message:j.message
    }));
  }
  getBooks() {
    return this.state.books;
  }
  onAdd(name, price) {
    this.setState({
      books: [...this.state.books, { name, price }]
    })

  }
  onDelete(name) {
    const books = this.getBooks().filter(b => b.name !== name);
    this.setState({ books });
  }
  onEditSave(name, price, originalName) {
    let books = this.getBooks();
    this.setState(
      {
        books: books.map(b => {
          if (b.name === originalName) {
            b.name = name;
            b.price = price;
          }
          return b;
        })
      }
    );
  }

  render() {
    return (
      <div className="App">
        <AddItem
          onAdd={this.onAdd}
        />
        <hr />
        <h1>Books List</h1>
        <h2>{this.state.message}</h2>
        <div>
          {
            this.state.books.map(b => {
              return (
                <BookItem
                  key={b.name}
                  {...b}
                  onDelete={this.onDelete}
                  onEditSave={this.onEditSave}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
