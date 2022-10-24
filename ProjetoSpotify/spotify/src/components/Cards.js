import {Button, Card} from 'react-bootstrap';
import PlaylistIcon from '../asstes/playlisticon.png'
import {useState, useEffect} from 'react'
import Playlist_one from './Playlist_one';
import ReactAudioPlayer from 'react-audio-player';
import axe from '../asstes/axe.jpg'
import pagode from '../asstes/pagode.jpg'
import rock from '../asstes/rock.jpg'
import forro from '../asstes/forro.jpg'
import samba from '../asstes/samba.jpg'
import sertanejo from '../asstes/sertanejo.jpg'
import padrao from '../asstes/padrao.png'
import { FaPlayCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
//FaPlayCircle


function Cards(props) {
  const [togglePlaylist, SettogglePlaylist] = useState(false)
  useEffect(()=>{
    const loadData = async() =>{
      
    };
    loadData();
  },[])

  const handleToggle = () =>{
    SettogglePlaylist(!togglePlaylist);
  }

  const handleImg = () =>{
    if(props.lista.imagem == 'samba'){
      return samba
    }
    if(props.lista.imagem == 'axe'){
      return axe
    }
    if(props.lista.imagem == 'pagode'){
      return pagode
    }
    if(props.lista.imagem == 'sertanejo'){
      return sertanejo
    }
    if(props.lista.imagem == 'forro'){
      return forro
    }
    if(props.lista.imagem == 'rock'){
      return rock
    }
    if(props.lista.imagem == 'padrao'){
      return padrao
    }

  }

  return (
    <div className='Card'>
      <img src={handleImg()}/>
      <div className='Card-name'>
        <p>{props.lista.nome}</p>
        <Link to={`/playlist/${props.lista.id}`}><FaPlayCircle /></Link>

        {togglePlaylist ? props.lista.musicas.map((musica)=>(<Playlist_one musica={musica}/>)) : <></>}
        
      </div>
    </div>
  );
}

export default Cards;