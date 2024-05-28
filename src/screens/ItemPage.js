import { useEffect, useState } from "react";
import ItemHolder from "./ItemUtil"
import axios from 'axios'

/**
 * Página com o cardápio
 * @returns 
 */
function ItemPage() {

    const [itemList, setItemList] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {

        await axios.get('http://localhost:8080/cardapio/')
        .then((response) => {
          setItemList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          setError(error);
        })
        
    }

    useEffect(() => {

        fetchData();

    }, []);


    return (
        <div>
            <h2>Cardápio</h2>
            <div className="container">
                <ItemHolder data={itemList} />
            </div>
        </div>
    )

}


export default ItemPage