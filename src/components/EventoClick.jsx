import Button from "./evento/Button";

const Evento = () => {
    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }   
    
    return (
        <>
            <p>Clique para disparar um evento:</p>

            <div className="btn-react">
                <Button event={meuEvento} text='Primeiro Evento'></Button>
                <Button event={segundoEvento} text='Segundo Evento'></Button>
                <p>Abre o console log</p>
            </div>
        </>
    )
}

export default Evento;