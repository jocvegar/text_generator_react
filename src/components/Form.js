import React from 'react';

class Form extends React.Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		// this.setState({[event.target.name]: event.target.value});
		console.log(event.target.name);
		console.log(event.target.value);
	}

	render() {
		return (
			<form>
				<fieldset>
				<legend>Choose your cut</legend>
					<div className="form-group">
						<label htmlFor="filler">Filler or no Filler</label>
						<select className="form-control" id="filler" name="type" onChange={this.handleChange}>
							<option value="all-meat">All Meat</option>
							<option value="meat-and-filler">Some Lorem filler</option>
						</select>

						<div className="form-group">
						    <label htmlFor="paras">How many strips?</label>
						    <input type="number" id="paras" name="paras" onChange={this.handleChange} min="1" max="10"/>
						</div>

						<div className="form-check">
							<label className="form-check-label" htmlFor="lorem">
								<input className="form-check-input" id="lorem" type="checkbox" name="lorem" onChange={this.handleChange} />
								Option one is this and that—be sure to include why it's great
							</label>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default Form;
