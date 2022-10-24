import Cards from './Cards'
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axios from "axios";
const Main = (props) => {

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        const loadData = async () => {
           await axios.get(`http://localhost:3001/users?Email=Public-playlist`).then(
            (res) => {
                const usuario = res.data[0]
                setPlaylists(usuario.PlayLists)
                
            })
        };
        loadData();
        //{playlists.map((lista)=>(<Cards lista={lista}/>))}
    }, [])
    return (
        <div className="content">
            <div className='preview-play-list'>
                <h4>Spotify Playlists</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>100% Você</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Para dormir</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Foco</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Seu astral</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>

        </div>
    )
}

export default Main