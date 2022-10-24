import Cards from './Cards'
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axe from '../asstes/axe.jpg'
import pagode from '../asstes/pagode.jpg'
import rock from '../asstes/rock.jpg'
import forro from '../asstes/forro.jpg'
import samba from '../asstes/samba.jpg'
import sertanejo from '../asstes/sertanejo.jpg'
import axios from "axios";
const Biblioteca = (props) => {
    const [user, setUser] = useState({})
    const [playlists, setPlaylists] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const jsonuser = async () => {
        return JSON.parse(sessionStorage.getItem('usuarioLogado'))
        }
        

    useEffect(() => {
        setRefresh(false)
        setLoading(true)
        
        const loadData = async () => {
             jsonuser().then((response) => { setUser(response)
                setPlaylists(response.PlayLists)
                setLoading(false)
                console.log(response)
            })
            
        };
        loadData();
    }, [refresh])

    const handleBiblioteca = () =>{
        const x = JSON.parse(sessionStorage.getItem('usuarioLogado'))
        const y = x.PlayLists.map((lista) => (<Cards lista={lista} />))
        return y
    }

    const handleRefresh = () =>{
        setRefresh(true)
    }

    return (

        <div>
            {!loading ?
            <div className="content">
            <div className='preview-play-list'>
                <h4 onClick={()=>{handleRefresh()}}>Playlists</h4>
                <div>
                    {playlists?
                    <div  className='main-play-list'>
                        {handleBiblioteca()}
                    </div>

                :
                    <div  className='main-play-list'>
                        <h1>Crie uma Playlist no Spotify!</h1>
                    </div>

                }
                    
                </div>
            </div>
        </div>
        :
        <div>
            <p>Carregando...</p>

        </div>
        }
        </div>



        
    )
}

export default Biblioteca