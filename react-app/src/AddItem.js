import React, { Component } from 'react';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        this.nameInput.value = '';
        this.priceInput.value = '';
    }
    render() {
        return (
            <form className="AddItem" onSubmit={this.onSubmit}>
                <h1>Add Book </h1>
                <input placeholder="name" ref={nameInput => this.nameInput = nameInput} />
                {'  |  '}
                <input placeholder="price" ref={priceInput => this.priceInput = priceInput} />
                {'  |  '}
                <button>Add</button>
            </form>
        );
    }
}

export default AddBook;