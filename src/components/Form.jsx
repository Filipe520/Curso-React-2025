const Form = () => {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuário.')
    }

    return (
        <section>
            <h2>Meu cadastro:</h2>

            <form onSubmit={cadastrarUsuario}>
                <section>
                    <label htmlFor="TextInput">Formulário</label>
                    <input type="text" name="textInput" id="TextInput" placeholder="Digite o seu nome..."/>
                </section>
                <section>
                    <input type="submit" value="Cadastrar" />
                </section>
            </form>
        </section>
    )
}

export default Form;