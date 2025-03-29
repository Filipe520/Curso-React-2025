import Item from './Item';

const List = () => {
    return (
        <>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}></Item>
                <Item marca='Renault' ano_lancamento={1964}></Item>
                <Item marca='Fiat' ano_lancamento={2001}></Item>

                <Item />
            </ul>
        </>
    )
}

export default List;