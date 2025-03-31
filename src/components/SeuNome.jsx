const SeuNome = ({ setNome2 }) => {
    return (
        <div>
            <label htmlFor="YourName">Digite o seu nome:</label>
            <input 
            type="text" 
            name="YourName" 
            id="YourName" 
            placeholder="Digite seu nome...." 
            onChange={(e) => setNome2(e.target.value)}/>

        </div>
    )
}

export default SeuNome;