import React, { useState } from "react";
import "./RegisterStyle.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegistration(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7700/api/auth/register", {
                email,
                username,
                password,
            });

            if (response.status === 201) {
                console.log("Registration successful");
                navigate('/login')
            } else {
                console.log("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <div className="register">
            <div className="regContainer">
                <form id="regForm">
                    <h2 className="regTitle">User Register</h2>

                    <label htmlFor="email">E-mail Address</label>
                    <input
                        type="text"
                        placeholder="Enter your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="buttons" onClick={handleRegistration}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
