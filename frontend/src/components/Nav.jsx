
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categoryPage/big">BIG STUFF</NavLink>
            <NavLink to="/categoryPage/medium">NOT SO BIG STUFF</NavLink>
            <NavLink to="/categoryPage/small">SMALL STUFF</NavLink>
            <NavLink to="/createProfile">CreateProfile</NavLink>
            <NavLink to="/loginPage">Sign In</NavLink>
            {/* <NavLink to="/profilePage">Profile</NavLink> */}
        </nav>
     );
}
 
export default Nav;