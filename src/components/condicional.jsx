import { useState } from 'react'

const Condicional = () => {
    const [email, setEmail] = useState()
    const [UserEmail, setEserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setEserEmail(email)
        console.log(UserEmail, 'testando')
    }

    function limparEmail() {
        setEserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>

            <form className='form2'>
                <input type="email" placeholder='Digite o seu melhor e-mail....' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>

                {
                /* Ser for verdadeiro mostrar na tela.
                   Ser for falso não mostrar nada. */
                }
                {UserEmail && (
                    <div>
                        <p>O e-mail do usuário é:</p>
                        <section className='resEmail'>
                            <p>
                                <strong>{UserEmail}</strong>
                            </p>
                            <button onClick={limparEmail} className='clearRes'>Limpar e-mail</button>
                        </section>
                    </div>
                    
                )}
            </form>
        </div>
    )
}

export default Condicional;