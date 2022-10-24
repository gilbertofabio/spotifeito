import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';

const FAQ = () => {

    const mocks = [
        { question: "Como cadastrar conta premium?", answer: "Faça seu cadastro !!" },
        { question: "Como escutar música de maneira facil?", answer: "Atraves do dowload" },
        { question: "O spotify é melhor que o youtube premium?", answer: "Temos as nossa vantagens.." },
        { question: "Como faço pacote familia?", answer: "Consultando os pacotes voce vera todos!" }
    ]

    function handlerText(id){
            document.getElementById("nameQuestion").textContent= mocks[id].question
            document.getElementById("answer").textContent= mocks[id].answer
    }

    function handlerButton() {
        document.querySelectorAll("button").forEach(function (button) {
            button.addEventListener("click", function (event) {
                const el = event.target
                const id = el.id;
                handlerText(id)
            })
        })
    }

    return (
        <div className='principal'>
            <div className="App">
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='main-page'>
                    <Header />
                    <div className="content" >
                        <h1>Ajuda rápida</h1>
                        <ul id='faq' onClick={ handlerButton }>
                            <li className='questions'>
                                <button className="buttonQuestions" id="0" >
                                    Como Cadastrar Conta Premium?
                                </button>
                            </li>
                            <li className='questions'>
                                <button className="buttonQuestions" id="1">
                                    Como posso escutar músicas de maneira facil?
                                </button>
                            </li>
                            <li className='questions'>
                                <button className="buttonQuestions" id="2">
                                    O Spotify é melhor que o youtube premium?
                                </button>

                            </li>
                            <li className='questions'>
                                <button className="buttonQuestions" id="3">
                                    Como faço pacote familia?
                                </button>
                            </li>
                            <div id = "faqAnswer">
                                <h3 id = "nameQuestion"></h3>
                                <p id = "answer"></p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}


export default FAQ