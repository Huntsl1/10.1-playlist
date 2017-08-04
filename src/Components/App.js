import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import PlayListItem from './PlayListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Artist: "",
      Title: "",
      Notes: ""
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm userName={this.state.userName}
                        Artist={this.state.Artist}
                        Title={this.state.Title}
                        Notes={this.state.Notes}  />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
