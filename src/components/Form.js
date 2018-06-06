import React from 'react';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value}, function(){
			this.props.onChange({[event.target.name]: event.target.value});
		})
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

						<div className="form-group">
							<label htmlFor="lorem">Lorem or No Lorem</label>
							<select className="form-control" id="lorem" name="startWithLorem" onChange={this.handleChange}>
								<option value="1">Start with Lorem</option>
								<option value="0">Just Meat</option>
							</select>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default Form;
