// Nessa parte vai ficar as importações

//import { useState } from 'react'

import HelloWorld from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

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
      <h1>Olá, React</h1> 
      <p>Meu primeiro App, <strong>{newName.toUpperCase()}</strong></p>
      <p>Soma: {sum(5, 23)}</p>

      <hr />

      <img src={url} alt="Minha Imagem" />

      <hr />
      <h2>Trabalhando com Componentes</h2>
      <HelloWorld />

      <hr />

      <h2>Parte 1. Trabalhando com props.</h2>
      <SayMyName nome="Filipe"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>

      <h2>Parte 2. Trabalhando com props</h2>
      <Pessoa name='Filipe' age='27' job='Programador' photo={url}/>
    </div>
  )
}
// Parte de Exportações
export default App
