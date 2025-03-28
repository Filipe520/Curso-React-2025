import styles from './Frase.module.css'

const Frase = () => {
    return (
        <div className={styles.fraseContaine}>
            <p className={styles.fraseContent}>Este é um componete com uma Frase!</p>
        </div>
    )
}

export default Frase;