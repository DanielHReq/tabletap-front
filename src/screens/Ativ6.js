import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoginScreen() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * Responsável pelo login 
     */
    const handleSubmit = async (e) => {
        e.preventDefault();


        const request_body = {
            "login": phoneNumber,
            "senha": "default"
        }
        
        try {
            const response = await axios.post("http://localhost:8080/auth/login", request_body);

            const token = response.data['Token'];

            localStorage.setItem("token", token);
            console.log("Login successful! Token saved in local storage:", token);
            // Optionally, you can redirect the user to another page or perform other actions upon successful login
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage("Invalid phone number");
            // Handle error appropriately, e.g., display an error message to the user
        }
    };

    return (
        <div>
            <Register />
            <Logout />
            <h1>Login</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tel">Phone number:</label>
                    <input
                        type="tel"
                        id="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber (e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <br/><br/>
            <CarrinhoList />
        </div>
    );
}


function Register () {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    /**
     * Responsável pelo cadastro
     */
    const cadastrarTelefone = async (e) => {
        e.preventDefault();


        const request_body = {
            "login": phoneNumber,
            "senha": "default",
            "role": "USER",
            //"nome": "nome_qualquer"
        }

        try {
            await axios.post("http://localhost:8080/auth/register", request_body);

            console.log("New user created");
        } catch (error) {
            console.error("Could not create user with number given", error);
            setErrorMessage("Invalid phone number");
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={cadastrarTelefone}>
                <div>
                    <label htmlFor="tel">Phone number:</label>
                    <input
                        type="tel"
                        id="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber (e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}


function Logout () {

    const Make_logout = () => {
        localStorage.clear();
        return "Deslogado"
    }


    return (
        <div>
            <h1>Logout</h1>
            <button onClick={Make_logout} >Logout</button>
        </div>
    );
}


function CarrinhoList () {

    const [carrinhos, setCarrinhos] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const showCarrinhos = async (e) => {
        e.preventDefault();
        
        try {

            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token not found");
            }
            console.log(token);

            const response = await axios.get("http://localhost:8080/carrinho/", {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
                responseType: "json", // Specify responseType as JSON
            });

            console.log(response);
            setCarrinhos(response.data);
            
            console.log("Showing carrinhos successful! It means you are logged", token);
            // Optionally, you can redirect the user to another page or perform other actions upon successful login
        } catch (error) {
            console.error("Error showing carrinhos:", error);
            setErrorMessage("You're not logged yet!");
            // Handle error appropriately, e.g., display an error message to the user
        }
    };

    const showOneCarrinho = (carrinho) => {
        return(
            <li>
                <h5>{JSON.stringify(carrinho)}</h5>
            </li>
        )
    }

    return (
        <div>
            <h1>Listar carrinhos</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={showCarrinhos}>Listar carrinhos</button>

            { carrinhos ? (carrinhos.map(showOneCarrinho)) : null }
        </div>
    );
}


function Navbar () {

    return (
        <ul className="nav nav-underline nav-fill">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="http://localhost:8080/bu">Susto?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">água</a>
            </li>
        </ul>
    )
}