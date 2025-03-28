//import { useState } from 'react'
import './App.css'
// Nessa parte vai ficar as importações
function App() {
  // Parte de logica

  const name = 'Filipe ';
  const lastName = 'Alves';

  const newName = name + lastName;

  const sum = (a, b) => a + b;

  const url = 'https://placehold.co/600x400';

  return (
    // Parte do HTML
    <div className='App'>
      <h1>Olá, React</h1> 
      <p>Meu primeiro App, <strong>{newName.toUpperCase()}</strong></p>
      <p>Soma: {sum(5, 23)}</p>

      <hr />

      <img src={url} alt="Minha Imagem" />

    </div>
  )
}
// Parte de Exportações
export default App
