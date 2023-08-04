import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const CreateProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    try {
      console.log({name, email, password} );
      const response = await axios.post("/api/signup", { name, email, password });
      const { data } = response;
      // console.log("successful", data);
      setMessage("successfully")
    } catch (error) {
      setMessage("failed")
      // console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <div>
        <h1>Create a New Account</h1>
        <form onSubmit={signUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Create Account</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    
    </>
  );
};

export default CreateProfilePage;
