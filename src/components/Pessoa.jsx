const Pessoa = ({name, age, job, photo}) => {
    return (
        <div>
            <img src={photo} alt={name} />
            <h3>Nome: {name}</h3>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
        </div>
    )
}

export default Pessoa;