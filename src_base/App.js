import React from 'react';
import './App.css';
import Meme from './Meme.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      imgURL: "",
      memes: []
    }
  }

  handleNameChange = e => {
    this.setState({name: e.target.value });
  }

  handleURLChange = e => {
    this.setState({imgURL: e.target.value});
  }

  sendMeme = () => {
    if (this.state.name.length === 0 || this.state.imgURL.length === 0) {
      return;
    }
    let newMeme = {
      name: this.state.name,
      imgURL: this.state.imgURL
    };
    let newMemes = this.state.memes;
    newMemes.push(newMeme);
    this.setState({
      memes: newMemes, 
      // name: "", 
      // imgURL: ""
    });
  }

  renderMemes = () => {
    if (this.state.memes.length === 0) {
      return (<div className="no-memes">No memes for sick AF tweens D:</div>)
    }
    let memes = [];
    this.state.memes.forEach((meme, index) => {
      memes.push(
        <Meme 
          key={index}
          name={meme.name}
          imgURL={meme.imgURL}
        />
      );
    });

    return (
      <div className="memes-container">
        {memes}
      </div>
    )
  }

  render = () => {
    return (
      <div className="app-container">
        <header className="header-text">UCLA Memes for Sick AF Tweens</header>
        <div className="submission-box">
          <input className="text-input"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          /><br></br>
          <input className="text-input"
            type="text"
            placeholder="Image URL"
            value={this.state.imgURL}
            onChange={this.handleURLChange}
          />
          <button 
            className="send-button"
            onClick={this.sendMeme}
          >
            Submit Meme
          </button>
        </div>
        {this.renderMemes()}
      </div>
    );
  }
}

export default App;
