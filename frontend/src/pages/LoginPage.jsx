import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nav = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      const { data } = response.data;
      console.log(data);
      nav(`/profilePage/${data._id}`)
      console.log("Login successful", data);
    } catch (error) {
      setErrorMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <>
        <Nav />
        <div> 
        <form onSubmit={login}>
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        </div>
    </>
  );
};

export default LoginPage;
