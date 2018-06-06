import React, { Component } from 'react';
import Output from './components/Output';
import Type from './components/Type';
import Paras from './components/Paras';
import Lorem from './components/Lorem';
import Title from './components/Title';
// import Form from './components/Form';
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
        this.showType = this.showType.bind(this);
        this.changeParas = this.changeParas.bind(this);
        this.changeLorem = this.changeLorem.bind(this);
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
                // console.log(jsonResponse.length);
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

    showType(type){
        this.setState({type: type}, this.getSampleText);
    }

    changeParas(paras){
        this.setState({paras: paras}, this.getSampleText);
    }

    changeLorem(lorem){
        this.setState({startWithLorem: lorem}, this.getSampleText);
    }

    render() {
        return (
            <div className="App container">
                <Title />
                <hr/>
                <form>
                    <fieldset>
                    <legend>Choose your cut</legend>
                        <div className="form-group">
                            <Type value={this.state.type} onChange={this.showType} />
                        </div>
                        <div className="form-group">
                            <Paras value={this.state.paras} onChange={this.changeParas} />
                        </div>
                        <div className="form-group">
                            <Lorem value={this.state.startWithLorem} onChange={this.changeLorem} />
                        </div>
                    </fieldset>
                </form>

                <Output
                    text={this.state.text} />
            </div>
        );
    }
}

export default App;
