const OutraLista = ({ itens }) => {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            { 
            itens.length > 0 ? (itens.map((item, chave) => (
                    <p key={chave}>{item}</p>
                ))) : (
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    )
}

export default OutraLista;