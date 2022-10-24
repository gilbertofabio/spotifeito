import { Button, Card } from 'react-bootstrap';
import PlaylistIcon from '../asstes/playlisticon.png'
import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axe from '../asstes/axe.jpg'
import pagode from '../asstes/pagode.jpg'
import rock from '../asstes/rock.jpg'
import forro from '../asstes/forro.jpg'
import samba from '../asstes/samba.jpg'
import padrao from '../asstes/padrao.png'
import sertanejo from '../asstes/sertanejo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from "axios";
//import {ReactAudioPlayer} from 'react-audio-player';

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState({ id: '02', nome: 'Rock', imagem: 'rock', musicas: [[Party, 'Party']] });
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  const mainuser = async () => {
    return JSON.parse(sessionStorage.getItem('usuarioLogado'))
    }
  useEffect(() => {
    setLoading(true)
    const loadData = async () => {
      if(id!="01"&&id!="02"&&id!="03"&&id!="04"&&id!="05"&&id!="06"){
        mainuser().then((response) => { 
          const usuario = response
          setPlaylist(usuario.PlayLists.find(e => { return e.id == id.toString() }))
         console.log(response)
     })
      }else{
        await axios.get(`http://localhost:3001/users?Email=Public-playlist`).then(
          (res) => {
              const usuario = res.data[0]
              //console.log(usuario.PlayLists.find(e => { return e.id == id.toString() }))
              setPlaylist(usuario.PlayLists.find(e => { return e.id == id.toString() }))
          })
          setLoading(false)
      }
     
    }
    loadData();
  }, [])

  const handleImg = () => {
    if (playlist.imagem === "samba") {
      return samba
    }
    if (playlist.imagem === "axe") {
      return axe
    }
    if (playlist.imagem === "pagode") {
      return pagode
    }
    if (playlist.imagem === "sertanejo") {
      return sertanejo
    }
    if (playlist.imagem === "forro") {
      return forro
    }
    if (playlist.imagem === "rock") {
      return rock
    }
    if(playlist.imagem == 'padrao'){
      return padrao
    }

  }

  return (
    <div>
      {playlist == undefined ? 
      <div><p>Carregando...</p></div>
      :
        <div className='playlist-id'>
          <div className='back-buttons'>
        <Link to={`/`}><div className='back-button' ><FaChevronLeft /></div></Link>
        <div className='forward-button' ><FaChevronRight /></div>
      </div>
      <div className='info-playlist'>
        <img src={handleImg()} className='playlist-img' />
        <div className='descricao-playlist'>
          <h3>Playlist:</h3>
          <h1>{playlist.nome}</h1>
        </div>
      </div>
      <div className='playlist-songs'>
        {playlist.musicas.map((musica) => (<div className='playlist-main'>
            <p>{musica}</p>
            <ReactAudioPlayer
              src={musica}
              controls
            />
          </div>))} 
      </div>
        </div>
      }
      

    </div>
  );
}

export default Playlist;