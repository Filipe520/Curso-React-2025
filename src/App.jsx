// Nessa parte vai ficar as importações

import HelloWorld from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/EventoClick';
import Form from './components/Form';
import Condicional from './components/condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/SauDacao';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import NavBar from './components/layout/navBar';
import Footer from './components/layout/Footer';

// Diversos Icones do FontWesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faMuseum} from '@fortawesome/free-solid-svg-icons';

// Diversos Icones do FontWesome mais de marcas
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';
import './App.css'

function App() {
  // Parte de logica

  const name = 'Filipe ';
  const lastName = 'Alves';

  const newName = name + lastName;

  const sum = (a, b) => a + b;

  const url = 'https://placehold.co/600x400';

  const nome = 'Maria';

  const meusItens = ['React', 'Vue', 'Angular']

  const [nome2, setNome2] = useState();
  return (
    // Parte do HTML com logica e componentes
    <div className='App'>
      <section className='sectionAulas'>
        <h1>Olá, React</h1>
        <p>Meu primeiro App, <strong>{newName.toUpperCase()}</strong></p>
        <p>Soma: {sum(5, 23)}</p>
      </section>

      <section className='sectionAulas'>
        <h2>Codigos no Terminal</h2>
        <div className='CodigosTerminal'>
          <h3>Iniciar um novo <strong>App React</strong></h3>
          <code>npm create vite@latest</code> <br />
          <h3>Dependência</h3>
          <code>npm install</code> <br />
          <code>npm install prop-types</code>
          <h3>Maneira certa de declarar uma classe do react é assim.</h3>
          <code>className='App'</code>
          <h3>Quando Agente usar o class="elemento" <br /> aqui no React, ai com certeza vai dá um erro.</h3>
          <p>dentro do react é uma jeito reservada</p>
          <code>class=""</code>
        </div>
        <hr />
        <img src={url} alt="Minha Imagem" />
      </section>

      <section className='sectionAulas'>
        <h2>Trabalhando com Componentes</h2>
        <HelloWorld />
      </section>

      <section className='sectionAulas'>
        <h2>Parte 1. Trabalhando com props.</h2>
        <SayMyName nome="Filipe" />
        <SayMyName nome="Matheus" />
        <SayMyName nome={nome} />
      </section>

      <section className='sectionAulas'>
        <h2>Parte 2. Trabalhando com props</h2>
        <Pessoa name='Filipe' age='27' job='Programador' photo={url} />
      </section>

      <section className='sectionAulas'>
        <h2>Inserindo CSS no React (CSS modules)</h2>
        <Frase />
        <Frase />
      </section>

      <section className='sectionAulas'>
        <h2>Utilizando React fragments</h2>
        <hr />
        <List></List>
      </section>

      <section className='sectionAulas'>
        <h2>Lista</h2>
        <hr />
        <List></List>
      </section>

      <section className='sectionAulas'>
        <h2>Eventos no React (onClick, onChange e onSubmit)</h2>
        <Evento numero='1'></Evento>
      </section>
      <Form></Form>

      <section className='form2-1'>
        <h1>Aula - Renderização condicional (if)</h1>
        <Condicional></Condicional>
      </section>

      <section className='sectionAulas'>
        <h2>Renderização de listas</h2>

        <OutraLista itens={meusItens}></OutraLista>
        <OutraLista itens={[]}></OutraLista>
      </section>

      <section className='sectionAulas'>
        <h2>State Lift</h2>

        <SeuNome setNome2={setNome2}></SeuNome>
        <Saudacao nome2={nome2}></Saudacao>
      </section>

      <section className='sectionAulas'>
        <h2>Implementando o React Router</h2>

        <h4>Códigos no Terminal</h4>
        <code>npm install react-router-dom</code>

        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/empresa' element={<Empresa />} />
          </Routes>

          <Footer />
        </Router>
      </section>

      <section className='sectionAulas'>
        <p>Acesse o site para mais detalhes.</p>
        <a href="https://react-icons.github.io/react-icons/" target='_blank' rel='external'><strong>React Icons</strong></a>
        <main>
          <h3>Desse código do fontWesome temos essas marcar aqui. <br /> que é Icones para o react</h3>
          <h5>Terminal</h5>
          <code>npm install --save @fortawesome/free-brands-svg-icons</code>
          <h5>Na área de importações</h5>
          <code>import [] from '@fortawesome/free-brands-svg-icons';</code> 
          <h5>Dentro do HTML</h5>
          <code>FontAwesomeIcon icon=[faHome]</code>
          <h5>Alguns exemplos:</h5>
          <ul>
            GitHub: faGithub

              <li>Twitter: faTwitter</li>

              <li>Facebook: faFacebook</li>

              <li>Instagram: faInstagram</li>

              <li>LinkedIn: faLinkedin</li>

              <li>Google: faGoogle</li>

              <li>YouTube: faYoutube</li>

              <li>Spotify: faSpotify</li>

              <li>Reddit: faReddit</li>

              <li>Twitch: faTwitch</li>

              <li>Pinterest: faPinterest</li>

              <li>Snapchat: faSnapchat</li>

              <li>GitLab: faGitlab</li>

              <li>Vimeo: faVimeo</li>

              <li>Apple: faApple</li>

              <li>Amazon: faAmazon</li>

              <li>PayPal: faPaypal</li>
          </ul>
          <p>Ser tiver com alguma duvida, <br /> basta ir, na área de importações, é dentro do elemento do import aberta o Ctrl + spaço.</p>
          <p>import [ <strong>Ctrl + spaço</strong> ] from '@fortawesome/free-brands-svg-icons';</p>
        </main>
        <footer>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contato
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faAmazonPay} /> AmazonPay
            </li>
            <li>
              <FontAwesomeIcon icon={faMuseum} /> Museum
            </li>
          </ul>
        </footer>
      </section>
    </div>


  )
}
// Parte de Exportações

export default App
