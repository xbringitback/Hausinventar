import Nav from "../components/nav";

// import axios from "axios";
// import { useState } from "react";

const LoginPage = () => {


    return ( 
        <>
            <Nav />
            <h1>Sign In</h1>
            <label htmlFor="email">E-Mail-Adresse</label>
            <input type="text" name="email" placeholder="email" />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name"/>
            <button>Anmelden</button>
        
        </>
     );
}
 
export default LoginPage;