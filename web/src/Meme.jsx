import React from "react";
import "./Meme.css";

class Meme extends React.Component {
	render = () => {
		return (
			<div className="meme-container">
				<div className="meme-text">submitted by: {this.props.name}</div>
				<img
					className="meme-image"
					src={this.props.imgURL}
					alt="meme me up, scotty"
				/>
			</div>
		);
	};
}

export default Meme;
