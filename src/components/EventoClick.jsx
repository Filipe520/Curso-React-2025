const Evento = ({ numero }) => {
    function meuEvento() {
        console.log(`Opa, Fui Ativado. ${numero}`)
    }
    
    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento;