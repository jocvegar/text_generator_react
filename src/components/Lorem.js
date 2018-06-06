import React, { Component } from 'react';

class Lorem extends Component {
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
				<label htmlFor="lorem">Lorem or No Lorem</label>
				<select className="form-control" id="lorem" onChange={this.onChange}>
					<option value="1">Start with Lorem</option>
					<option value="0">Just Meat</option>
				</select>
			</div>
		);
	}
}

export default Lorem;
