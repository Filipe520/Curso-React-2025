// Nessa parte vai ficar as importações

import HelloWorld from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/EventoClick';
import Form from './components/Form';
import Button from './components/evento/Button';

import './App.css'

function App() {
  // Parte de logica

  const name = 'Filipe ';
  const lastName = 'Alves';

  const newName = name + lastName;

  const sum = (a, b) => a + b;

  const url = 'https://placehold.co/600x400';

  const nome = 'Maria';
  return (
    // Parte do HTML com logica
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
        <SayMyName nome="Filipe"/>
        <SayMyName nome="Matheus"/>
        <SayMyName nome={nome}/>
      </section>

      <section className='sectionAulas'>
        <h2>Parte 2. Trabalhando com props</h2>
        <Pessoa name='Filipe' age='27' job='Programador' photo={url}/>
      </section>

      <section className='sectionAulas'>
        <h2>Inserindo CSS no React (CSS modules)</h2>
        <Frase/>
        <Frase/>
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
        <hr />
        <Form></Form>
        <hr />
      </section>
    </div>
  )
}
// Parte de Exportações
export default App
