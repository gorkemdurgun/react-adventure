import { Link } from "react-router-dom";

function Navigator() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                        <Link to="/bio"> Bio </Link>
                        <Link to="/settings"> Settings </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigator;