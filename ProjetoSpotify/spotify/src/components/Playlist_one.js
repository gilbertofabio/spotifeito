import {Button, Card} from 'react-bootstrap';
import PlaylistIcon from '../asstes/playlisticon.png'
import {useState, useEffect} from 'react'
import ReactAudioPlayer from 'react-audio-player';

function Playlist_one(props) {


  return (
    <div className='playlist-main'>
      <p>{props.musica[1]}</p>
      <ReactAudioPlayer
        src={props.musica[0]}
        controls
        /> 
    </div>
  );
}

export default Playlist_one;