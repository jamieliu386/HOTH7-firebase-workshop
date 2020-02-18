import React from "react";
import "./App.css";
import Meme from "./Meme";

//TODO: Import firebase reference from ./lib/firebase.js

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			imgURL: "",
			memes: [],
		};
	}

	listenForMemes = () => {
		// TODO: Listen for changes to Firestore database in "memes" collection

		console.log("Listening for sicc memes");
	};

	updateMemeCollection = (newMeme) => {
		// TODO: Add submitted data to Firestore collection

		console.log("Hecc yea, fresh memes!", newMeme);
	};

	componentDidMount = () => {
		// Sets up event listener for Firestore database
		this.listenForMemes();
	};

	componentWillUnmount = () => {
		// TODO: Stop listening for new memes
	};

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleURLChange = (e) => {
		this.setState({ imgURL: e.target.value });
	};

	sendMeme = () => {
		if (this.state.name.length === 0 || this.state.imgURL.length === 0) {
			return;
		}

		let newMeme = {
			name: this.state.name,
			imgURL: this.state.imgURL,
		};
		let newMemes = this.state.memes;

		newMemes.push(newMeme);
		this.setState({ memes: newMemes });

		// Pushes new memes to Firestore
		this.updateMemeCollection(newMeme);
	};

	renderMemes = () => {
		if (this.state.memes.length === 0) {
			return <div className="no-memes">No memes for sick AF tweens D:</div>;
		}

		let memes = [];
		this.state.memes.forEach((meme, index) => {
			memes.push(<Meme key={index} name={meme.name} imgURL={meme.imgURL} />);
		});

		return <div className="memes-container">{memes}</div>;
	};

	render = () => {
		return (
			<div className="app-container">
				<header className="header-text">UCLA Memes for Sick AF Tweens</header>
				<div className="submission-box">
					<input
						className="text-input"
						type="text"
						placeholder="Name"
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
					<br></br>
					<input
						className="text-input"
						type="text"
						placeholder="Image URL"
						value={this.state.imgURL}
						onChange={this.handleURLChange}
					/>
					<button className="send-button" onClick={this.sendMeme}>
						Submit Meme
					</button>
				</div>
				{this.renderMemes()}
			</div>
		);
	};
}

export default App;
