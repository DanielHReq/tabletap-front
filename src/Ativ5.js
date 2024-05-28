import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemsDisplay from './Ativ5ItemDisplay';

const FetchData = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedId, setSearchedId] = useState(null);
  const [endereco, setEndereco] = useState('http://localhost:8080/mesas/');
  

  const searchId = () => {

    if (searchedId) {
      setEndereco('http://localhost:8080/mesas/' + searchedId);
    } else {
      setEndereco('http://localhost:8080/mesas/');
    }

  }


  useEffect(() => {

    const fetchData = async () => {

      await axios.get(endereco)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
      
    }

    fetchData();
    
  }, [endereco]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  
  return (
    <div>

      {JSON.stringify(data)}

      <input id="inputSearchMesa" value={searchedId} onChange={ (e) => setSearchedId(e.target.value)}></input>
      <button type="button" className='btn' onClick={searchId}>Pesquisar</button>

      <ItemsDisplay items={data} />

    </div>
  );
}

export default FetchData;