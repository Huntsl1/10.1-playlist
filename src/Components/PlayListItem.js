import React, { Component } from 'react';


const songStyle = {
  backgroundColor: '#70BBEB'
}

const white = {
  color: 'white',
  textShadow: '2px 2px #808080'
}


export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let songs = this.props.songs.map( event => {
      return(
        <div key={event._id} className="card" style={songStyle} >
          <div className="card-block">
            <h5 className="card-text text-left"><span style={white}>User:</span> {event.userName}</h5>
            <h5 className="card-text text-left"><span style={white}>Artist/Band:</span> {event.Artist}</h5>
            <h5 className="card-text text-left"><span style={white}>Title:</span> {event.Title}</h5>
            <h5 className="card-text text-left"><span style={white}>Notes:</span> {event.Notes}</h5>
          </div>
        </div>
      );
    });
    return(
      <div>
        <button type="button" className="btn btn-success float-left" onClick={this.props.onClick}>Update List</button>
        <br/><br/>
        <div id="scroll-area" >
          {songs}
        </div>
      </div>
    )
  }
}
