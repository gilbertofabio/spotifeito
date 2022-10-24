import Cards from './Cards'
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axios from "axios";
import {GoSearch} from 'react-icons/go' 

import Music from './Music';
const Buscas = (props) => {

    const [playlists, setPlaylists] = useState([])
    const [busca, setBusca] = useState("");
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const loadData = async () => {
           await axios.get(`http://localhost:3001/users?Email=Public-playlist`).then(
            (res) => {
                const usuario = res.data[0]
                setPlaylists(usuario.PlayLists)
                
            })
        };
        loadData();

    }, [])

    const handleSearch = async(e) =>{
        e.preventDefault();
        await axios.get(`http://localhost:3001/users?Email=musicas-buscas`).then(
            (res) => {
                const usuario = res.data[0]
                const musicas = usuario.musicas
                var resultadosMusicas = []
                musicas.map((musica)=>{ 
                    if(musica.toLowerCase()==busca.toLowerCase()){
                        resultadosMusicas.push(musica)
                    }
                })
                setResultados(resultadosMusicas)
            })

    }

    return (
        <div className="content">
            <div className='search-area'>
                <form onSubmit={handleSearch}>
                    <input className="busca-musica"
                        type="buscas" name="seuNome"
                        placeholder="    O que você quer ouvir?"
                        onChange={e => setBusca(e.target.value)}
                        value={busca || ""}
                    /><br />
                    <GoSearch/>
                </form>
            </div>
            <div className='resultados'>
                {resultados.length==0?<></>
                :
                    <div>                    
                        {resultados.map((resultado)=>(
                            <div><Music resultado={resultado}/></div>
                        ))}
                    </div>

                }

            </div>
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

export default Buscas