import React, { Component } from 'react';
import Output from './components/Output';
import Title from './components/Title';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'all-meat',
            paras: 5,
            startWithLorem: 1,
            format: 'json',
            text: '',
        }
    }

    componentWillMount() {
        this.getSampleText();
    }


    getSampleText = async (e) => {
        // e.preventDefault();
        try {
            const API_CALL = await fetch(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}&start-with-lorem=${this.state.startWithLorem}&format=${this.state.format}`);
            if (API_CALL.ok) {
                const jsonResponse = await API_CALL.json();
                console.log(jsonResponse.length);
                this.setState({
                    text: jsonResponse,
                })
            } else {
                throw new Error('Request Failed!');
            }
        }   catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="App container">
                <Title />
                <Output
                    text={this.state.text}
                />
            </div>
        );
    }
}

export default App;
