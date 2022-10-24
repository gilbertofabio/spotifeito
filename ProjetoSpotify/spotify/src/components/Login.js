import Logo from '../asstes/spot_black.png'
import axios from "axios";
import React, { useState, useEffect } from 'react';
import users from './users'
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const API = "http://localhost:3001";
const DataBase = "/users";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [todos, setTodos] = useState([]);
    var valido = true;
    useEffect(()=>{
        const loadData = async() =>{
          const res = await fetch(API + DataBase)
          .then((res)=> res.json())
          .then((data)=>data)
          .catch((err)=>console.log(err))
          setTodos(res)
        };
        loadData();
        
      },[])

      const handleLogin = async(e) =>{
        e.preventDefault();
        await axios.get(`http://localhost:3001/users?Email=${email}`).then(
            (res) => {
                const usuario = res.data[0]

                if(usuario && usuario.Password == password){
                    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))
                    navigate('/')
                }else{
                    console.log('Senha incorreta')
                }
            }
        )
      }
  
    
  
    return (
        <div className="cadastro">
            <div className="dent_cadastro">
                <img className="img_cad" src={Logo}></img>
                <h5 className="h1_cad">Para continuar, faça login no Spotify.</h5>
                <div className='link-buttons'>
                     <button className='facebook-link'><FaFacebook/><h5>Inscrever-se com facebook</h5></button>
                     <div className='google-link'><FaGoogle/><h5>Inscrever-se com Google</h5></div>
                </div>
                <div className='form-divisao'>
                    <div className='linha'></div> <p>ou</p> <div className='linha'></div>
                </div>
                
                <form action="" className='form-area' method="post" enctype="text/plain" onSubmit={handleLogin}>
                    <div className="div_base">
                        <label ><span className="text_cad">Qual é o seu e-mail?</span><br /></label>
                        <input className="caixa_ent"
                            type="email" name="seuNome"
                            placeholder="Insira seu e-mail"
                            onChange={e => setEmail(e.target.value)}
                            value={email || ""}
                        /><br />
                        <label ><span className="text_cad">Senha</span><br /></label>
                        <input className="caixa_ent"
                            type="password" name="seuNome"
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password || ""}
                        /><br />
                    </div>
                   
                    <div className='submit-button'>
                        <input type="submit" value={'ENTRAR'} />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;