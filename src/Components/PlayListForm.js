import React, { Component } from 'react';


export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Artist: "",
      Title: "",
      Notes: ""
    }
  }

  _handleUserName = (event) => {
    this.setState({userName: event.target.value});
  }

  _handleArtist = (event) => {
    this.setState({Artist: event.target.value});
  }

  _handleTitle = (event) => {
    this.setState({Title: event.target.value});
  }

  _handleNotes =(event) => {
    this.setState({Notes: event.target.value});
  }

  addToList = (event) => {
      event.preventDefault();
      this.setState({userName: event.target.value, Title: event.target.value, Artist: event.target.value, Notes: event.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', Notes: '', Artist: '', Title:''});
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="text-left">
          <form onSubmit={this.addToList}>
            <div className="form-group">
              <label className="text-white" htmlFor="user-name">User Name:</label>
              <input type="text" className="form-control" onChange={this._handleUserName} placeholder="Name or User Name" value={this.state.userName} required />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="Artist">Artist/Band: </label>
              <input type="text" className="form-control"  onChange={this._handleArtist} placeholder="Artist or Band Name" value={this.state.Artist} required />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="Title">Song Title: </label>
              <input type="text" className="form-control"  onChange={this._handleTitle} placeholder="Song Title" value={this.state.Title} required />
            </div>
            <div className="form-group">
              <label  className="text-white" htmlFor="Notes">Notes about Song: </label>
              <textarea className="form-control" rows="3" onChange={this._handleNotes} placeholder="Say some things about the song" value={this.state.Notes} />
            </div>
            <input className="btn btn-primary" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}
