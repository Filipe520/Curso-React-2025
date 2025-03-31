const Saudacao = ({ nome2 }) => {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <>
            {nome2 && <p>{gerarSaudacao(nome2)}</p>}
        </>
    )
}

export default Saudacao;