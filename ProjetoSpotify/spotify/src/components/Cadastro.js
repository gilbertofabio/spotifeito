import Logo from '../asstes/spot_black.png'
import React, { useState, useEffect } from 'react';
import users from './users'
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
const API = "http://localhost:3001";
const DataBase = "/users";

const Cadastro = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailV, setEmailV] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [genero, setGenero] = useState('');
    const [user, setUser] = useState({});
    var valido = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        var casa = users.length

        if (email === emailV) {

            if (casa > 0){
                for(var i = 0;i<=users.length-1; i++){
                    var teste = users[i].Email;
                    if (teste === email){
                        
                        valido = false;
                    }
                }
            }
            
            if(valido === true){
            await fetch(API + DataBase,{
                method: "POST",
                body: JSON.stringify({
                    "Email": email,
                    "Username": username,
                    "Password": password,
                    "DataNasc": dataNasc,
                    "Genero": genero,
                    "PlayLists":[]
                }),
                headers:{
                  "Content-Type": "application/json",
                },
              }).then(alert(`${user.Username} foi adicionado com sucesso!`)).then( navigate("/") );
        
            //console.log(users[0].Email)
            }
            else{
                alert("E-mail já cadastrado")
                valido = true
            }
            console.log(users)
            
        } else {
            alert("Digite os emails iguais!")
        }
        
        //console.log(typeof(users[users.length-1].Email))
        //console.log(typeof(casa))
        //console.log(email)
        
    }

    return (
        <div className="cadastro">
            <div className="dent_cadastro">
                <img className="img_cad" src={Logo}></img>
                <h2 className="h1_cad">Inscreva-se grátis e comece a curtir.</h2>
                <div className='link-buttons'>
                     <button className='facebook-link'><FaFacebook/><h5>Inscrever-se com facebook</h5></button>
                     <div className='google-link'><FaGoogle/><h5>Inscrever-se com Google</h5></div>
                </div>
                <div className='form-divisao'>
                    <div className='linha'></div> <p>ou</p> <div className='linha'></div>
                </div>
                
                <form action="" className='form-area' method="post" enctype="text/plain" onSubmit={ handleSubmit }>
                    <div className="div_base">
                        <label ><span className="text_cad">Qual é o seu e-mail?</span><br /></label>
                        <input className="caixa_ent"
                            type="email" name="seuNome"
                            placeholder="Insira seu e-mail"
                            onChange={e => setEmail(e.target.value)}
                            value={email || ""}
                        /><br />
                        <label ><span className="text_cad">Confirme o seu e-mail</span><br /></label>
                        <input className="caixa_ent"
                            type="email" name="seuEmail"
                            placeholder="Insira seu e-mail novamente"
                            onChange={e => setEmailV(e.target.value)}
                            value={emailV || ""}
                        /><br />
                        <label ><span className="text_cad">Crie uma senha</span><br /></label>
                        <input className="caixa_ent"
                            type="password" name="seuNome"
                            placeholder="Crie uma senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password || ""}
                        /><br />
                        <label ><span className="text_cad">Como devemos chamar você?</span><br /></label>
                        <input className="caixa_ent"
                            type="text" name="seuNome"
                            placeholder="Insira um nome de perfil"
                            onChange={e => setUsername(e.target.value)}
                            value={username || ""}
                        /><br />
                        <label ><span className="text_cad">Qual sua data de nascimento?</span><br />
                            <input type="date" name="suaid"
                                onChange={e => setDataNasc(e.target.value)}
                                value={dataNasc || ""}
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
                    <table className="table2">
                        <tr>
                            <td><input type="checkbox" id="c1" name="chk1" value="Marketing" /></td>
                            <td><label for="marketing"><span className="text_cad2">   Não quero receber mensagens de marketing do Spotify</span></label><br />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" id="c2" name="chk2" value="Compartilhar" /></td>
                            <td><label for="compartilhar"><span className="text_cad2"> Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</span></label><br />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" id="c3" name="chk3" value="Termos" /></td>
                            <td><label for="termos"><span className="text_cad2">  Eu concordo com os Termos e Condições de Uso do Spotify.</span></label>
                            </td>
                        </tr>
                    </table>
                    <p className="info_txt"><span className="text_cad2">Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a Política de Privacidade do Spotify.</span></p>

                    <br />
                    <div className='submit-button'>
                        <input type="submit" value={'Inscrever-se!'} />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Cadastro;