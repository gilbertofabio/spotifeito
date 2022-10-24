import { Link } from 'react-router-dom';
import Logo from '../asstes/Logo.png'
import {MdHomeFilled} from 'react-icons/md'
import {BiSearch, BiLibrary, BiHeartSquare} from 'react-icons/bi'
import {RiAddBoxFill, RiHeart3Fill} from 'react-icons/ri'
import { FaQuestion } from "react-icons/fa";
import {BsQuestionLg, BsQuestion} from 'react-icons/bs'
import { useState, useEffect } from 'react'

const Sidebar = () =>{

    const [user, setUser] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [modal, setModal] = useState(false)
    useEffect(()=>{
        setRefresh(false)
        const loadData = async() =>{
            await setUser(JSON.parse(sessionStorage.getItem('usuarioLogado')))
        };
        loadData();
        setModal(false)
      },[refresh])
    return(
        <div className="sidebar-box">
            <img src={Logo}></img>
            <div className='sidebar-buttons'>
                
                <span title='Inicio'>
                <MdHomeFilled/><Link className='link-faq' to="/" >Início    </Link> 
                </span>

                <span title='Buscar' className='link-faq'>
                <BiSearch/><Link className='link-faq' to="/search" >Buscar   </Link> 
                </span>

                <span title='Biblioteca' className='link-faq'>
                {user ? 
                <div><BiLibrary/><Link className='link-faq' to="/collection" >Sua Biblioteca </Link></div>
                :
                <div><BiLibrary/>Sua Biblioteca</div>}    
                </span>

                <span title='FAQ'>
                <BsQuestion/><Link className='link-faq' to="/faq" >Duvidas Frequentes</Link> 
                </span>

            </div>

            <div className='sidebar-buttons-two'>
                
                <span title='AddPlaylist'>
                <RiAddBoxFill className='add'/>Criar playlist    
                </span>

                <span title='Curtidas'>
                <div className='heart-box'><RiHeart3Fill className='heart'/></div>Músicas Curtidas    
                </span>

            </div>
        </div>
    )
}

export default Sidebar