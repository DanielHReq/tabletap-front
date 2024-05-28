import  '../styles/ItemUtil.css';


/**
 * Lista de items
 * @param {*} props Recebe uma lista de itens com (item, desc)
 * @returns 
 */
export default function ItemHolder(props) {

    const data = props.data;

    const showItem = (item) => {
        return(
            <ItemHolderElement item={item} />
        )
    }

    return(
        data ? data.map(showItem) : null
    )
}


/**
 * Placeholder com UM item
 * @param {*} item dicionário com os dados do item
 * @returns 
 */
function ItemHolderElement({item}) {

    const nome = item.nome;
    const desc = item.descricao;

    return(
        <div className="itemHolderElement row">
            <div className="col-md-4">
                <img src="https://via.placeholder.com/300"/>
            </div>
            <div className="col-md-8">
                <div className="itemNome row">{item.nome}</div>
                <div className="itemDesc row">{item.descricao}</div>
            </div>
        </div>
    )

}