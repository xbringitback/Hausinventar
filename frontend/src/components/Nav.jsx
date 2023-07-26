
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categoryPage/big">BIG STUFF</NavLink>
            <NavLink to="/categoryPage/medium">NOT SO BIG STUFF</NavLink>
            <NavLink to="/categoryPage/small">SMALL STUFF</NavLink>
        </nav>
     );
}
 
export default Nav;