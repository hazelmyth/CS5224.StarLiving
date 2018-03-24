import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
const defaultProps = {
    name: "This is a default name"
};

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('WILL MOUNT');
    }
    componentDidMount() {
        console.log("DID MOUNT");
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(this.props, this.state, nextProps, nextState);
    }
    componentDidUpdate(preProps, preState) {
        console.log('inside component did update');
        console.log(this.props, this.state, preProps, preState);
    }
    render() {
        const { title, name, onClick } = this.props;
        return (
            <div className="MyComponent">
                <h1>Title: {title}</h1>
                <h1>Name: {name}</h1>
                <h2 onClick={onClick}>Click Me</h2>
            </div>
        );
    }
}
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;