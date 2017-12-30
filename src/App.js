import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor () {
        super()
        this.state = {
            users: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        console.log('Success!')
        axios.get('http://localhost:8000/persons/')
            .then(response => {
                console.log(response)
                this.setState({users: response.data})
            })
    }
    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default App;
