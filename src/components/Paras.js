import React, { Component } from 'react';

class Paras extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vale: props.value
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({value: e.target.value}, function(){
			this.props.onChange(this.state.value);
		})
	}

	render() {
		return (
			<div>
				<label htmlFor="paras">How many strips?</label>
				<input type="number" id="paras" value={this.state.value} defaultValue="5" onChange={this.onChange} min={1} max={10} />
			</div>
		);
	}
}

export default Paras;
