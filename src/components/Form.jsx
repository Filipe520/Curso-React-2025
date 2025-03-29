import { useState } from 'react';

const Form = () => {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
        console.log('Cadastrou o usuário.')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <section>
            <h2>Meu Formulário</h2>

            <form onSubmit={cadastrarUsuario}>
                <section>
                    <label htmlFor="TextInput">Nome Usuário: </label>
                    <input type="text" name="textInput" id="TextInput" required value={name}
                    placeholder="Digite o seu nome..." onChange={(e) => setName(e.target.value)}/>
                </section>
                <section>
                    <label htmlFor="senhaInput">Senha do Usuário: </label>
                    <input type="password" name="senhaInput" id="senhaInput" placeholder="Digite sua senha..."
                    onChange={(e) => setPassword(e.target.value)} required/>
                </section>
                <section>
                    <input type="submit" value="Cadastrar" />
                </section>
            </form>
        </section>
    )
}

export default Form;