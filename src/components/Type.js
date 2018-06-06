import React, { Component } from 'react';

class Type extends Component {
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
			<div className="form-group">
				<label htmlFor="filler">Filler or no Filler</label>
				<select className="form-control" id="filler" value={this.props.value} onChange={this.onChange}>
					<option value="all-meat">All Meat</option>
					<option value="meat-and-filler">Some Lorem filler</option>
				</select>
			</div>
		);
	}
}

export default Type;
