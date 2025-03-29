import PropTypes from 'prop-types';

// Definição do componente funcional Item
const Item = ({ marca = 'Faltou a marca', ano_lancamento = 0 }) => {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
};

// Definindo os tipos das props (propTypes)
Item.propTypes = {
    marca: PropTypes.string.isRequired, // 'marca' deve ser uma string e é obrigatória
    ano_lancamento: PropTypes.number    // 'ano_lancamento' deve ser um número (opcional)
};

export default Item;
