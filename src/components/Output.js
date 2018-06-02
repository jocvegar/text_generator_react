// import React from 'react';
import React, { Component } from 'react';


class Output extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		text: props.text
	// 	}
	// }

	render() {
		return (
			<div className="output">
				{this.props.text}
			</div>
		);
	}
}

export default Output;
