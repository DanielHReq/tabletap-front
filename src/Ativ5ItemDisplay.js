function ItemsDisplay(props) {

    const data = props.items
    console.log(data)

    const showItems = (item) => {
        return(
            <tr>
                <th scope='row'>{item.id}</th>
                <td> {item.valor}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2>Itens</h2>
            </div>
            <div className='row'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Valor</th>
                        </tr>
                    </thead>
                    
                    <tbody>{props.items.map(showItems)}</tbody>
                </table>
            </div>
        </div>
    )

}

export default ItemsDisplay