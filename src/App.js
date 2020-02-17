import React from 'react';
import './App.css';
import Meme from './Meme.js';
import firebase from './lib/firebase.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      imgURL: "",
      memes: []
    }
  }

  componentDidMount = () => {
    this.db = firebase.firestore();
    this.unsubscribe = this.db.collection("memes")
      .onSnapshot((querySnapshot) => {
        let memeList = [];
        querySnapshot.forEach(function(doc){
          let meme = doc.data();
          let newMeme = {
            name: meme.name,
            imgURL: meme.imgURL
          }
          memeList.push(newMeme);
        });
        this.setState({
          memes: memeList,
        });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  handleNameChange = e => {
    this.setState({name: e.target.value});
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
    this.setState({memes: newMemes});

    this.db.collection("memes").add(newMeme)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
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
