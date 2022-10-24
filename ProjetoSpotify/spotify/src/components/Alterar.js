import Logo from '../asstes/spot_black.png'
import React, { useState, useEffect } from 'react';
import users from './users'
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import axios from "axios";
const API = "http://localhost:3001";
const DataBase = "/users";

const Alterar = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailV, setEmailV] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [genero, setGenero] = useState('');
    const [user, setUser] = useState({});
    const [playlist, setPlaylist] = useState([])
    var valido = true;
    
    const altuser = async () => {
        return JSON.parse(sessionStorage.getItem('usuarioLogado'))
        }

    const getNewUser = async () => {
        return axios.get(`http://localhost:3001/users?Email=${email}`)
    }

    useEffect(()=>{
        //setRefresh(false)
        const loadData = async () => {
            altuser().then((user) => { setUser(user)
               
               console.log(user)
               console.log(user.id)
                setEmail(user.Email)
                setUsername(user.Username)
                setPassword(user.Password)
                setGenero(user.Genero)
                setDataNasc(user.DataNasc)
                setPlaylist(user.PlayLists)
           })
           
       };
       loadData();
   }, [])
    
    // useEffect(()=>{
    //     const loadData = async() =>{
    //         await setUser(JSON.parse(sessionStorage.getItem('usuarioLogado')))


    //     };
    //     loadData();
    //     console.log(user.id)
    //     setEmail(user.Email)
    //     setUsername(user.Username)
    //     setPassword(user.Password)
    //     setGenero(user.Genero)
    //     setDataNasc(user.DataNasc)
    //     setPlaylist(user.PlayLists)
    //   },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
            await fetch(`http://localhost:3001/users/${user.id}`,{
                method: "PATCH",
                body: JSON.stringify({
                    "Email": email,
                    "Username": username,
                    "Password": password,
                    "DataNasc": dataNasc,
                    "Genero": user.Genero,
                    "PlayLists":user.PlayLists
            }),
                headers:{
                  "Content-Type": "application/json",
                },
            //   }).then(handleLogin()).then(navigate('/'))
        }).then(()=>{
            getNewUser().then((res)=>{
                const usuario = res.data[0]

                sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))
                // console.log(usuario)
            })
        }).then(navigate('/'))
        
    }
    const handleLogin = async() =>{
        sessionStorage.removeItem('usuarioLogado')
        
      }
    return (
        <div className="cadastro">
            <div className="dent_cadastro">
                <img className="img_cad" src={Logo}></img>
                
                
                <form action="" className='form-area' method="post" enctype="text/plain" onSubmit={ handleSubmit }>
                    <div className="div_base">
                        <label ><span className="text_cad">Qual é o seu e-mail?</span><br /></label>
                        <input className="caixa_ent"
                            type="email" name="email"
                            placeholder="Insira seu e-mail"
                            onChange={e => setEmail(e.target.value)}
                            value={email || user.Email}
                        /><br />
                        <label ><span className="text_cad">Crie uma senha</span><br /></label>
                        <input className="caixa_ent"
                            type="password" name="senha"
                            placeholder="Crie uma senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password || user.Password}
                        /><br />
                        <label ><span className="text_cad">Como devemos chamar você?</span><br /></label>
                        <input className="caixa_ent"
                            type="text" name="nome"
                            placeholder="Insira um nome de perfil"
                            onChange={e => setUsername(e.target.value)}
                            value={username || user.Username}
                        /><br />
                        <label ><span className="text_cad">Qual sua data de nascimento?</span><br />
                            <input type="date" name="suaid"
                                onChange={e => setDataNasc(e.target.value)}
                                value={user.DataNasc}
                            /></label><br />
                    </div>
                    <label ><span className="text_cad">Qual é seu gênero?</span><br /></label>
                    <table>
                        <tr>
                            <td><input type="radio" id="html" name="genero" value="Masculino"
                                onChange={e => setGenero(e.target.value)}

                            />
                                <label for="masculino"><span className="text_cad2">&nbsp;&nbsp;Masculino</span></label><br /></td>
                            <td><input type="radio" id="css" name="genero" value="Feminino"
                                onChange={e => setGenero(e.target.value)}
                            />
                                <label for="feminino"><span className="text_cad2">&nbsp;&nbsp;Feminino&nbsp;</span></label><br /></td>
                            <td><input type="radio" id="javascript" name="genero" value="NaoBinario"
                                onChange={e => setGenero(e.target.value)}
                            />
                                <label for="naobinario"><span className="text_cad2">&nbsp;&nbsp;Não Binario&nbsp;</span></label></td>
                            <td><input type="radio" id="javascript" name="genero" value="Outros"
                                onChange={e => setGenero(e.target.value)}
                            />
                                <label for="outros"><span className="text_cad2">&nbsp;&nbsp;Outros&nbsp;</span></label></td>

                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td><input type="radio" id="javascript" name="genero" value="PrefiroNaoDizer"
                                onChange={e => setGenero(e.target.value)}
                            />
                                <label for="prefironaodizer"><span className="text_cad2">&nbsp;&nbsp;Prefiro Não Dizer</span></label></td>
                        </tr>
                    </table>
                    <br />
                    <div className='submit-button'>
                        <input type="submit" value={'Editar'} />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Alterar;