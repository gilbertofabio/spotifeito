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
import sertanejo from '../asstes/sertanejo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {FiMoreVertical, FiMoreHorizontal} from 'react-icons/fi' 
import axios from "axios";
//import {ReactAudioPlayer} from 'react-audio-player';

function Music(props) {
    const [user, setUser] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [crntPlaylist, setCrntPlaylist] = useState([])
    const musica = props.resultado
    useEffect(()=>{
        setRefresh(false)
        const loadData = async() =>{
            await setUser(JSON.parse(sessionStorage.getItem('usuarioLogado')))

        };
        loadData();
        setModal(false)
        setModal2(false)
      },[refresh])

  const handleOption = () =>{
    if(user){
        if(modal){
            setModal2(false)
        }
        setModal(!modal)

    }

  }
  const handleOptionPl = () =>{
    if(user){
        setCrntPlaylist(user.PlayLists)
        setModal2(!modal2)
    }
  }

  const handleCriar = async() =>{

    let newId =  new Date()

    const novaPlaylist = {
        id: `${newId}`,
        nome: `${musica}`,
        imagem: "padrao",
        musicas: [
            musica
        ]
      }

      let playlists = user.PlayLists

      playlists.push(novaPlaylist)


    await fetch(`http://localhost:3001/users/${user.id}`,{
        method: "PATCH",
        body: JSON.stringify({
            "Email": user.Email,
            "Username": user.Username,
            "Password": user.Password,
            "DataNasc": user.DataNasc,
            "Genero": user.Genero,
            "PlayLists": playlists
    }),
        headers:{
          "Content-Type": "application/json",
        },
      }).then(setModal(!modal))
  }

  const handleAdd = async(playlist) =>{

    // playlist.push(musica)

    // const novaPlaylist = {
    //     id: `${newId}`,
    //     nome: `${musica}`,
    //     imagem: "padrao",
    //     musicas: playlist
    //   }

    //   let playlists = user.PlayLists

    //   playlists.push(novaPlaylist)

    let usuario = user

    user.PlayLists.map((pl) => {if(pl.id == playlist.id){
        pl.musicas.push(musica)
    }})



    await fetch(`http://localhost:3001/users/${user.id}`,{
        method: "PATCH",
        body: JSON.stringify(usuario),
        headers:{
          "Content-Type": "application/json",
        },
      }).then(setModal(!modal))
  }


  const handleLogin = async() =>{
    await axios.get(`http://localhost:3001/users/${user.id}`).then(
        (res) => {
            const usuario = res.data[0]
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))
        }
    )
  }

  return (
    <div>
        <div className='resultado'>
            <h3>Resultado:</h3>
            <p>{props.resultado}</p>
            <FiMoreHorizontal onClick={()=>(handleOption())}/>
        </div>
        {modal? 
            <div className="modal-musica">
                <p onClick={()=>{handleOptionPl()}}>Adicionar Playlist Existente</p>
                <div className='linha-modal-music'></div>
                <p onClick={()=>{handleCriar()}}>Criar Playlist</p>
            </div>
            :
            <></>
        }
        {modal2? 
            <div className="modal-playlist">
                {crntPlaylist.map((pl) => (
                    <p onClick={()=>{handleAdd(pl)}}>{pl.nome }</p>
                    ))}
            </div>
            :
            <></>
        }
        
    </div>
  );
}

export default Music;