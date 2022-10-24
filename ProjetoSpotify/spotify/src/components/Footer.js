import { Link } from 'react-router-dom';
const Footer = () =>{
//<Link to="/faq" >Dúvidas? Tire a sua aqui</Link>
    return(
        <div className='footer-content'>
            <div className='footer-left'>
                <p>
                    Amostra do Spotify
                </p>
                <p>
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa ter cartão de crédito.
                </p>
            </div>
            <div className='footer-right'>
                <div className='inscrever'>
                <Link className='link-footer' to="/signup" >Inscreva-se grátis</Link>
                </div>
                
            </div>
            
        </div>
    )

}

export default Footer;