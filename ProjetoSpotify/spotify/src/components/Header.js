import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Header = (props) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [modal, setModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [novoUsername, setNovoUsername] = useState('')
    

    const mainuser = async () => {
        return JSON.parse(sessionStorage.getItem('usuarioLogado'))
        }

    useEffect(()=>{
        setRefresh(false)
        const loadData = async () => {
            mainuser().then((response) => { 
                setUser(response)
               console.log(response)
           })
           
       };
       loadData();
   }, [refresh])

    
    const handleLogout = () =>{
        sessionStorage.removeItem('usuarioLogado')
        setRefresh(true)
        navigate('/')
    }

    const handlePerfil = () =>{
        navigate('/alterar')
    }

    return(
        <div>
            {!user ? <div className="Header">
                <h5>|</h5>
                <Link className="link" to='/signup'>Inscrever-se</Link>
                <Button onClick={()=>{navigate('/login')}}>Entrar</Button>
            </div> : 
            <div className="Header-logado">
                <div className="Header-user">
                    <p>{user.Username}</p>
                    {!modal? <FaAngleDown onClick={()=>{setModal(!modal)}}/>:
                        <div className="user-modal">
                            <FaAngleUp onClick={()=>{setModal(!modal)}}/>
                            <div className="modal-options">
                                <p>Conta</p>
                                <p onClick={()=>{handlePerfil()}}>Perfil</p>
                                <div className='linha-modal'></div>
                                <p onClick={()=>{handleLogout()}}>Sair</p>
                            </div>
                            </div>
                    
                     
                     }
                    
                </div>
            </div>}
            
        </div>
    )

}

export default Header;