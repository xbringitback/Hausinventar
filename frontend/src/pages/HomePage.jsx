import Nav from "../components/nav";
import { NavLink } from "react-router-dom";

import Categories from "../components/Categories";

import bigImg from "../assets/img/wolke3.jpg"
import mediumImg from "../assets/img/wolke4.jpg"
import smallImg from "../assets/img/wolke5.jpg"

const Home = () => {
    return ( 
        <>
        <header>
            <Nav/>
            <h1>MY FURNITURE</h1>
        </header>
        <main>
            <section>
                <NavLink to="/categoryPage/big"><Categories name="big" imgPath={bigImg} /></NavLink>
                <NavLink to={"/categoryPage/medium"}><Categories name="medium" imgPath={mediumImg} /></NavLink>
                <NavLink to={"/categoryPage/small"}><Categories name="small" imgPath={smallImg} /></NavLink>

            </section>
        </main>
        </>
     );
}
 
export default Home;