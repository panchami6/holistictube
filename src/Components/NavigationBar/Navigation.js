import { Link } from "react-router-dom";
import {useAuth} from "../../Context/auth-context";
import "./navigation.css";

export function Navigation() {
    const { isUserLogin, logoutUser } = useAuth();
    return(
    <nav className="navigation">
        <div className="nav-Header" >
        <Link className="nav-link nav-header" to="/"><span><i className="fas fa-spa"></i></span> HolisticTube</Link>
        </div>
        <div className = "logout-btn">
        {isUserLogin && <button className="nav-link" onClick={logoutUser}><i className="fas fa-sign-out-alt"></i></button>}
        </div>
    </nav>
    )
}