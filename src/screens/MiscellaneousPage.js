import ListGroup from 'react-bootstrap/ListGroup';


export default function MiscDisplay () {

    return (
        <div>
            
            <Header/>
            <TableInfoHeader/>

            <br/><br/><br/>

            <CustomerLoginInput/>

            <MenuSearchBar/>

            <ItemHorizontalCard/>

            <ItemListGroup/>

            <br/><br/>

            <ItemListGroupReact/> 

            <PagesNavbar/>

            <br/><br/><br/><br/><br/>
        </div>
    )
}



/**
 * Card horizontal com 1 item
 * possui uma imagem, nome do item, descrição do item, valor
 * @returns 
 */
function ItemHorizontalCard () {

    return (
        <div className="card mb-3" style={{maxWidth:540}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://via.placeholder.com/300" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Item name</h5>
                        <p className="card-text">Descrição item</p>
                    </div>
                    <div className="card-footer text-body-secundary">
                        <div className="text-end">Valor</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function ItemSection () {

    return (
        <div className="mt-4 mb-1">
            <h4>Section</h4>
        </div>
    )
}

function ItemListGroup () {

    return (
        <div className="list-group">
            <ItemSection/>
            <ItemListGroupItem/>
            <ItemListGroupItem/>
            <ItemSection/>
            <ItemListGroupItemWithImage/>
            <ItemListGroupItem/>
        </div>
    )
}

function ItemListGroupReact () {

    return (
        <ListGroup>
            <ListGroup.Item><ItemSection/></ListGroup.Item>
            <ListGroup.Item><ItemListGroupItem/></ListGroup.Item>
            <ListGroup.Item><ItemListGroupItem/></ListGroup.Item>
            <ListGroup.Item><ItemSection/></ListGroup.Item>
            <ListGroup.Item><ItemListGroupItemWithImage/></ListGroup.Item>
            <ListGroup.Item><ItemListGroupItem/></ListGroup.Item>
        </ListGroup>
    )
}

function ItemListGroupItem () {

    return (
        <div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Nome</h5>
                <small>Valor</small>
            </div>
            <p>Descrição completa</p>
        </div>
    )
}

function ItemListGroupItemWithImage () {

    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-md-2">
                    <img src="https://via.placeholder.com/300" className="mw-100" />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between">
                        <h5 class="mb-1">Nome</h5>
                        <small>Valor</small>
                    </div>
                    <p>Descrição completa</p>
                </div>
            </div>
        </div>
    )
}


function PagesNavbar () {

    return (
        <ul className="fixed-bottom nav nav-underline nav-fill" style={{backgroundColor:"lightgrey"}}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Page</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Page</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Page</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Page</a>
            </li>
        </ul>
    )
}

function Header () {

    return (
        <div className="row" style={{backgroundColor:"lightgray"}}>
            <h5>Restaurant</h5>
        </div>
    )
}

function TableInfoHeader () {

    return (
        <div className="row sticky-top d-flex justify-content-end" style={{backgroundColor:"lightgrey", paddingRight:30}}>
            Table N
        </div>
    )
}


function MenuSearchBar () {

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search plates here" aria-label="Search plates" aria-describedby="button-addon"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon">Button</button>
        </div>
    )
}

function CustomerLoginInput () {

    return (
        <div className="mb-3">
            <label for="exampleFormControlInput" className="form-label">Phone number</label>
            <input type="tel" className="form-control" id="exampleFormControlInput" placeholder="your number here!"/>
        </div>

    )
}