import React from 'react';

export default class MainComponent extends React.Component {
	render() {
		var myObjects = this.props.myObjects || [];
		var myStyle = {
			border: "solid 1px #00F"
		};

		return (
			<div style={myStyle}>
				<h1>This is react</h1>
				{myObjects.map( (obj, idx) => {
					return <li key={idx}>[ {obj.count} ] {obj.name}</li>
				})}
			</div>
		);
	}
}
