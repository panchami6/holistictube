import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    return(
    <nav className="navigation">
        <div className="nav-Header" >
        <Link className="nav-link nav-header" to="/"><span><i className="fas fa-spa"></i></span> HolisticTube</Link>
        </div>
    </nav>
    )
}