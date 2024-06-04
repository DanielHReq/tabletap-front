

export default function PagesNavbar () {

    return (
        <ul className="fixed-bottom nav nav-underline nav-fill" style={{backgroundColor:"lightgrey"}}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="cardapio">Cardápio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="carrinho">Carrinho</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pedidos">Pedidos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="customerlogin">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Page</a>
            </li>
        </ul>
    )
}