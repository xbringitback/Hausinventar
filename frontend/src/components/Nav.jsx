
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>BIG STUFF</NavLink>
            <NavLink to={"/"}>NOT SO BIG STUFF</NavLink>
            <NavLink to={"/"}>SMALL STUFF</NavLink>
        </nav>
     );
}
 
export default Nav;