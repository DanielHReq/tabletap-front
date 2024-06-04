/**
 * O login do cliente é realizado utilizando apenas
 * o número de celular dele.
 * 
 * O cadastro deve ser feito quando o número não for reconhecido
 * 
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function CustomerLoginPage () {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loginDone, setLoginDone] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();


        const request_body = {
            "phonenumber": phoneNumber
        }
        
        try {
            const response = await axios.post("http://localhost:8080/auth/customerlogin", request_body);

            const token = response.data['Token'];

            localStorage.setItem("token", token);
            console.log("Login successful! Token saved in local storage:", token);

            setLoginDone(true);

            // Optionally, you can redirect the user to another page or perform other actions upon successful login
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage("Invalid phone number");
            // Handle error appropriately, e.g., display an error message to the user
        }
    };

    return (
        <div>
            <Logout />
            <h1>Login</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {loginDone && (
                <Navigate to="/home" replace={true} />
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Phone number:</label>
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
        </div>
    );
}


function Logout() {

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