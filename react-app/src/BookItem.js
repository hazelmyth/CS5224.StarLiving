import React, { Component } from 'react';

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSumbit = this.onEditSumbit.bind(this);
    }
    onDelete() {
        const { onDelete, name } = this.props;
        onDelete(name);
    }
    onEdit() {
        this.setState({ isEdit: true });
    }
    onEditSumbit(event) {
        event.preventDefault();
        this.props.onEditSave(this.nameInput.value, this.priceInput.value, this.props.name);
        this.setState({ isEdit: false });
    }
    render() {
        const { name, price } = this.props;
        return (
            <div className="Bookitem">
                {
                    this.state.isEdit ? (
                        <form onSubmit={this.onEditSumbit}>
                            <input placeholder="name" defaultValue={name} ref={nameInput => this.nameInput = nameInput} />
                            {'  |  '}
                            <input placeholder="price" defaultValue={price} ref={priceInput => this.priceInput = priceInput} />
                            {'  |  '}
                            <button>Save</button>
                        </form>
                    ) : (
                            <div> <span>{name}</span>
                                {'  |  '}
                                <span>{price}</span>
                                {'  |  '}
                                <button onClick={this.onEdit}>Edit</button>
                                <button onClick={this.onDelete}>Delete</button>
                            </div>
                        )
                }

            </div>
        );
    }
}

export default BookItem;
